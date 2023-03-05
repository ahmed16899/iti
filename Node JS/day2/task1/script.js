var myModule = require("./flight");
//console.log(myModule.Flight)

const f1 = new myModule.Flight()
f1.addFlight(10, 15, 'cairo', 'london', '3-5-2023', 1)
f1.addFlight(15, 20, 'alex', 'paris', '3-5-2023', 2)
console.log('displayAll')

f1.displayAll();
console.log('displayOne')

console.log('////////////////////////////////')
f1.displayOne(1);

console.log('updateOne')
console.log('////////////////////////////////')


const obj = {
    sNumber: 100, fNumber: 100, departure: "mosco", arrival: "florida", date: "12-12-2025", id: 100
}

f1.updateOne(2 , obj)
f1.displayAll();

//console.log(f1)
//myModule.flights.push(f1)
//console.log(myModule.flights)