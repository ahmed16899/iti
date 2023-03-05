function generateCourse(x,y,course){
    var defaultObj={
        courseName:"ES6",
        courseDuration:"3days",
        courseOwner:"JavaScript"
    }
    if(Object.keys(course).length <= 3 && (  Object.keys(course).includes('courseName') || Object.keys(course).includes('courseDuration')||Object.keys(course).includes('courseOwner') ))
    {
        console.log(Object.keys(course))
    }
    else
    {
        throw 'errror';
    }
    var result= Object.assign({},defaultObj,course)
    return result ;
}


console.log(generateCourse(1,2,{courseDuration:'asd' ,courseName:'asd' ,  courseOwner:'asd' }))