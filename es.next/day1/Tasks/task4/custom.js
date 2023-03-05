const fruits = ["apple", "strawberry", "banana", "orange", "mango" ];


let AllString = fruits.every( (fruit)=> typeof fruit === "string")
console.log(AllString)


let someStartWithA = fruits.some( (fruit)=> fruit.startsWith('a'))
console.log(someStartWithA)


let filterArray = fruits.filter( (fruit)=> fruit.startsWith('b') ||  fruit.startsWith('s')) 
console.log(filterArray)


let iLikaArray = fruits.map( (fruit)=> ` i Like ${fruit}`) 



iLikaArray.forEach(i => console.log(i));
