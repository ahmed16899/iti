console.log(Reflect.apply(Math.floor, undefined, [1.75]));



const x = new Array(1, 2, 3);
const y = Reflect.construct(Array, [1, 2, 3]);

x.push(5)


console.log(x, y)


let obj = { a: 10 };
let isUpdated = Reflect.defineProperty(obj, 'a', { value: 20 });
console.log("isUpdated :", isUpdated);
console.log(obj.a);



const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, '12');
console.log(arr);


const object = {
    val1: 1,
    val2: 2
};
console.log(Reflect.get(object, 'val1'));


const object1 = {
    property1: 22
};
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property2'));
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1').writable);



const obj1 = {
    property1: 356
};
const result = Reflect.getPrototypeOf(object1);
console.log(result);


const obj2 = {
    property1: 434
};

console.log(Reflect.has(object1, 'property1'));
console.log(Reflect.has(object1, 'property2'));
console.log(Reflect.has(object1, 'toString'));


const object1 = {};
console.log(Reflect.isExtensible(object1));
Reflect.preventExtensions(object1);
console.log(Reflect.isExtensible(object1));


const obj = { ab: 5, bc: 5 };
const obj1 = { ab: 5, bc: 5, ca: 7 };
console.log(Reflect.ownKeys(obj));
console.log(Object.keys(obj1));
console.log(Reflect.ownKeys(obj1));

const object1 = {};
console.log(Reflect.isExtensible(object1));
Reflect.preventExtensions(object1);
console.log(Reflect.isExtensible(object1));

const object1 = {};
Reflect.set(object1, 'property1', "NULL");
console.log(object1.property1);

const object1 = {};
console.log(Reflect.setPrototypeOf(object1, Object.prototype));
console.log(Reflect.setPrototypeOf(object1, null));