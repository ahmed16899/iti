use FacultySystemV2
db.createCollection("faculty", {
    validator: {
        $jsonSchema: {
            "bsonType": "object",
            required: ["facultyname", "addressname"],
            additionalProperties: false,
            "properties": {
                _id: {},
                facultyname: { bsonType: "string" },
                addressname: { bsonType: "string" },
            }
        }
    }
})


db.createCollection("courses", {
    validator: {
        $jsonSchema: {
            "bsonType": "object",
            required: ["coursename", "finalmark"],
            additionalProperties: false,
            "properties": {
                _id: {},
                coursename: { bsonType: "string" },
                finalmark: { bsonType: "number" },
            }
        }
    }
})
db.faculty.insertOne({ facultyname: "cairo", addressname: "giza" }) //  63f4adfde55d6984484a4c00
db.faculty.insertOne({ facultyname: "6 october", addressname: "october" }) //63f4ae92e55d6984484a4c01



db.courses.insertOne({ coursename: "c++", finalmark: 100 })//63f4bfe1e55d6984484a4c06
db.courses.insertOne({ coursename: "java", finalmark: 80 })//63f4c057e55d6984484a4c07

db.student.insertOne({ firstname: "ahmed", lastname: "ayman", isfired: "no", facultyid: "63f4adfde55d6984484a4c00", course: [{ courseid: "63f4bfe1e55d6984484a4c06", grade: 100 }, { courseid: "63f4c057e55d6984484a4c07", grade: 80 }] }) //63f4b0b7e55d6984484a4c04
//63f4c092e55d6984484a4c08
db.faculty.find({})
db.courses.find({})
db.student.find({})

db.student.drop()
db.course.drop()




db.student.aggregate([
    {
        $match:{
            $or:[{firstname:{$exists:true}},{lastname:{$exists:true}}]
        }
    }//end of $match
   ,
    {
        $project:{
            fullName:{$concat:["$firstname", "$lastname"]},
            grade:"$course.grade"
        }
    },
    {
        $unwind:{
            path:"$grade"
        }
    }
     ,
    {    
        $group:{
            _id:"$fullName",
            averageGrades:{
                $avg:"$grade"
            }
        }
    }
    
    ]//end of aggregate
    )

// 3 -  Using aggregation display the sum of final mark for all courses in Course collection.

db.courses.aggregate({
    $group: {
       _id:'$coursename',
        "final": {
            $sum: "$finalmark"
        }
    }
});

/*4. Implement (one to many) relation between Student and 
Course, by adding array of Courses IDs in the student object. 
• Select specific student with his name, and then display 
his courses.*/

    db.student.aggregate([{    
       $match:{
            firstname:"ahmed"
        }},{
        $lookup:{
            from: "course",
            localField: "courses.courseid",
            foreignField: "_id",
            as: "student_courses"  
        }
    }])


 db.student.aggregate([{    
       $match:{
            firstname:"ahmed"
        }},{
        $lookup:{
            from: "faculty",
            localField: "facultyid",
            foreignField: "_id",
            as: "student_faculty"  
        }
    }])
