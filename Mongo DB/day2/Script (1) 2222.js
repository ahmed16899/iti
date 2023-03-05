//a- Display all documents in instructors collection
db.getCollection("instructors").find({})


//b- Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.instructors.find({ salary: { $gt: 4000 }},{ firstName:1 , salary:1 })


//c- Display all instructors with ages less than or equal 25.
db.instructors.find({ age: { $lte: 25 }})


//d- Display all instructors with ages less than or equal 25.
db.instructors.find({ "address.city": "mansoura" , "address.street": { $in: [10, 14] }} , { firstName:1 , salary:1 , address:1 })


//e- Display all instructors who have js and jquery in their courses (both of them not one of them)
db.instructors.find({ $and: [{ courses: "jquery" }, { courses: "js" }]})


//f- Display number of courses for each instructor and display first name with number of courses. 
db.instructors.find({courses: { $exists: true }}).forEach((ins) => {
    print(`${ins.firstName}  ,${ins.courses ?.length}`)
})


//g- Write mongodb query to get all instructors that have firstName and

db.instructors.find({},{firstName:1 , lastName:1 , age:1}).sort({"firstName":1 , "lastName":-1})


//h- Find all instructors that have fullName that contains “mohammed”.
db.instructors.find({$or:[{firstName:'mohammed'},{lastName:'mohammed'}]})



//i- Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.instructors.deleteOne({ firstName: "ebtesam" , "courses?.length":5 })

//j- Add active property to all instructors and set its value to true
 db.instructors.updateMany({}, { $set: { active: true } }, { upsert: true });
 
 //k- Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index)
 //db.getCollection("instructors").find({firstName:"mazen" , lastName:"mohammed"})
 db.instructors.updateMany({firstName:"mazen" , lastName:"mohammed" , courses:"EF"},{$set:{"courses.$":"jquery"}})
 
 
 //l- Add jquery course for “noha hesham”
  //db.getCollection("instructors").find({firstName:"noha" , lastName:"hesham"})
 db.instructors.updateMany({firstName:"noha" , lastName:"hesham"},{$addToSet:{courses:"jquery"}})
 
 
 //m- Remove courses property for “ahmed mohammed ” instructor
 db.getCollection("instructors").find({firstName:"ahmed" , lastName:"mohammed"})
 
 db.instructors.updateMany({firstName:"ahmed" , lastName:"mohammed"},{ $unset: { "courses": 16 }})
 
 //n- Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc
  //db.getCollection("instructors").find({courses:{$size:3} })
  db.instructors.updateMany({courses:{$size:3}},{$inc:{salary:-500}});
  
 // o- Rename address field for all instructors to fullAddress. 
    db.instructors.updateMany({},{$rename:{address:"fullAddress"}}) 
    
 // p- Change street number for noha hesham to 20
    db.instructors.updateMany({$and:[{firstName:"noha"},{lastName:"hesham"}]},{$set:{'fullAddress.street':20}})
    
    
    
  
  
 