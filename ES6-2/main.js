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
// let c1 = [42, 22], c2 = [89, 77], c3 = [12, 34];
// let d1 = [...c1, ...c2, ...c3];
// console.log(d1);

//Used in Objects
// let obj1 = { foo: 'bar', x: 42 }, obj2 ={ foo: 'baz', y: 78 }
// let clonedObj = {...obj1};
// console.log(clonedObj);

// let mergedObj = {...obj1, ...obj2 };
// console.log(mergedObj);

//Array Destructuring
// const rgb = [255, 200, 0];
// // const r = rgb[0];
// // const g = rgb[1];
// // const b = rgb[2];

// const [red, green, blue] = rgb;
// console.log(red, green, blue);

//Object Destructuring
// const developer = {
//     firstName: 'Nabendu',
//     lastName: 'Biswas',
//     country: 'India'
// }

// // const firstName = developer.firstName;
// // const lastName = developer.lastName;
// // const country = developer.country;

// const { firstName, lastName, country } = developer;
// console.log(firstName, lastName, country);

//ES6 Classes
// class CreateRoom {
//     constructor(name) {
//         this.room = `${name}'s room`
//     }

//     cleanRoom(soap){
//         console.log(`Cleaning ${this.room} with ${soap}`)
//     }
// }

// const nabsRoom = new CreateRoom('Nabendu');
// const shikhaRoom = new CreateRoom('Shikha');

// nabsRoom.cleanRoom('Domex');
// shikhaRoom.cleanRoom('Lizol');

//Traditional for loop
// let languages = ['Java', 'JavaScript', 'Rust'];
// for(let i=0; i< languages.length; i++){
//     console.log(languages[i])
// }

//forEach
// languages.forEach(lang => console.log(lang));

//Map use case
// let numbers = [6, 8, 10];

// let doubledNums = [];
// for(let i=0; i<numbers.length; i++){
//     doubledNums.push(numbers[i] * 2);
// }

// console.log(doubledNums)

// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

//filter use case
// let products = [
//     { name: 'Samsung M21', category: 'smartphone'},
//     { name: 'Samsung M31', category: 'smartphone'},
//     { name: 'Macbook Air', category: 'laptop'},
//     { name: 'Asus Zenbook', category: 'laptop'}
// ];

// let filteredProducts = [];
// for(let i=0; i<products.length; i++){
//     if(products[i].category === 'smartphone'){
//         filteredProducts.push(products[i])
//     }
// }

// console.log(filteredProducts)

//filter
// let filtered = products.filter(product => product.category === 'laptop');
// console.log(filtered);

//find use case
let users = [
    {name: 'Nabendu'},
    {name: 'Shikha'},
    {name: 'Hriday'},
    {name: 'Mousam'},
    {name: 'Hari'},
    {name: 'Rohit'}
];

// let user;
// for(let i=0; i<users.length; i++){
//     if(users[i].name === 'Mousam'){
//         user = users[i];
//         break;
//     }
// }

// console.log(user);

//find
const coder = users.find(user => user.name === 'Hari');
console.log(coder)