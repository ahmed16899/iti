db.getCollection("instructors").find()


/*6*/
db.instructors.insert(
  {"firstName" : "ahmed",
    "lastName" : "ayman",
    "age" : 22}
)

db.instructors.insert(
  {
    "age" : 50}
)
db.instructors.insert(
 [{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
           
		]
)



let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
               
		
		];

db.instructors.insert(instructorsArray);

db.getCollection("instructors").find()


db.instructors.find({},{firstName:true,lastName:true , address:true})


db.instructors.find({age:21},{"address.city" :1 ,firstName:1 })


db.instructors.find({"address.city":"mansoura"},{age :1 ,firstName:1 })


db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1})


db.instructors.find({courses:"mvc"},{firstName:1,courses:1})


