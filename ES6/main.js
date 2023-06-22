//const
// const firstAge = 8;
// firstAge = 10;

// const childAges = [5, 8, 10, 12];
// // childAges = [5, 8, 10, 12, 14];
// childAges.push(14);
// console.log(childAges);

// const personObj = { name: 'Nabendu', skill: 'JS' };
// console.log(personObj);
// personObj.skill = 'React';
// personObj.profession = 'Developer';
// console.log(personObj);

//Default Parameters
// const isEqual = (num1, num2=10) => {
//     console.log(num1)
//     console.log(num2)
//     return num1 === num2;
// }

// console.log(isEqual(10, 20))
// console.log(isEqual(10))

//Object Literals Extensions
// let name = 'Nabendu';
// let age = 41;

// let obj = {
//     name,
//     age
// }

// console.log(obj)

//Dynamic Fields
// let ageField = 'age';

// let es6Obj = {
//     name: 'Shikha',
//     [ageField]: 41
// }

// console.log(es6Obj)

//Rest operators
// let arrFunc = (...arr) => {
//     console.log(arr)
// }

// arrFunc(12, 34, 42, 22, 89);

// let restFunc = (a, b, c, ...n) => {
//     console.log(a + b + c);
//     console.log(n)
// }

// restFunc(12, 34, 42, 22, 89, 77)

//Spread Operator
// let a = [12, 34, 42, 22, 89];
// console.log(Math.min(12, 34, 42, 22, 89, 77));
// console.log(Math.min(...a));
// console.log(Math.max(...a));

//Copy by reference issue
// let x = [34, 42, 22, 89];
// let y = x;
// y.push(45);
// console.log(y);
// console.log(x);

//Solution with spread
// let c = [12, 34, 42, 22, 89, 77];
// let d = [...c];
// d.push(13);
// console.log(d);
// console.log(c);

//Merge arrays
let c1 = [42, 22], c2 = [89, 77], c3 = [12, 34];
let d1 = [...c1, ...c2, ...c3];
console.log(d1);

//Used in Objects
let obj1 = { foo: 'bar', x: 42 }, obj2 ={ foo: 'baz', y: 78 }
let clonedObj = {...obj1};
console.log(clonedObj);

let mergedObj = {...obj1, ...obj2 };
console.log(mergedObj);

