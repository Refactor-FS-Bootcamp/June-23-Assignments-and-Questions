//Variables
// var firstName = 'Nabendu';
// let lastName = "Biswas"
// var age = 41;
// age = 40;
// const isDeveloper = true;
// // isDeveloper = false;
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(isDeveloper)

//Difference between var and let
// function varExp(){
//     if(true){
//         var num1 = 10;
//         console.log('Inside if var ' + num1);
//     }
//     console.log('Outside if var ' + num1);
// }

// varExp();
// console.log('Outside function var ' + num1);


// if(true){
//     let num2 = 20;
//     console.log('Inside if let ' + num2);
// }
// console.log('Outside if let ' + num2);

//DataTypes
// const firstName = 'Nabendu';
// const age = 41;
// const rating = 5.5;
// const isDeveloper = true;
// const x = null;
// let y;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDeveloper);
// console.log(typeof x);
// console.log(typeof y);

// if(typeof x == 'object'){
//     console.log("This is null")
// }

//String Concatenation
// const name = 'Nabendu';
// const age = 41;

// //old way
// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old');
// //New way
// console.log(`My name is ${name} and i am ${age} year's old`);

//String methods
// const str = 'Hello JavaScript';
// const str2 = 'Language of the web';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat('! ', str2));
// console.log(str.startsWith('Hell'));
// console.log(str.startsWith('Well'));
// console.log(str.endsWith('Script'));
// console.log(str.endsWith('eb'));
// console.log(str.substring(0,7));
// console.log(str2.substring(4));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));
// console.log(str2.split(' '));

//Array
// const lang = ['JavaScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
// console.log(lang[2]);

// lang.pop();
// lang.pop();
// console.log(lang);

// lang.push('Pascal');
// lang.unshift('Swift');
// console.log(lang);

// lang.shift();
// console.log(lang);

// console.log(Array.isArray(lang));
// console.log(Array.isArray('JavaScript'));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));
// console.log(lang.slice(2));
// console.log(lang.slice(2,4));
// console.log(lang.join());
// console.log(lang.join(''));
// console.log(lang.join('+'));

//Objects
// const person = {
//     firstName: 'Nabendu',
//     'last Name': 'Biswas',
//     age: 41,
//     rating: 5.5,
//     isDeveloper: true,
//     hobbies: ['coding', 'teaching', 'youtubing'],
//     address: {
//         hno: 95,
//         city: 'Bhopal',
//         state: 'MP'
//     }
// }

// console.log(person.firstName);
// console.log(person['last Name']);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// console.log(Object.keys(person));
// console.log(Object.values(person));

//Loops
//For loop
// for(let i=0; i<=10; i++){
//     console.log(`Loop Number - ${i}`)
// }

//While loop
// let i=0;
// while(i<=10){
//     console.log(`Loop Number - ${i}`);
//     i++;
// }

//Do-while loop
// let i=0;
// do{
//     console.log(`Loop Number - ${i}`);
//     i+=11;
// }while(i<=10)

//Array of Objects
// const lang = [
//     {id: 1, name: 'Pascal', year: 1970},
//     {id: 2, name: 'C', year: 1972},
//     {id: 3, name: 'C++', year: 1985},
//     {id: 4, name: 'Java', year: 1994},
//     {id: 5, name: 'JavaScript', year: 1995},
//     {id: 6, name: 'Kotlin', year: 2011}
// ]

//Traditional for..loop
// for(let i=0; i<lang.length; i++){
//     console.log(lang[i].id)
// }

//for..of loop
// for(let item of lang){
//     console.log(item.name)
// }

//forEach 
// lang.forEach(it => console.log(it.year))

//Conditionals
//if statement
// const x = '10';
// if(x == 10){
//     console.log('x is 10');
// }

//if..else statement
// const y = '20';
// if(y === 20){
//     console.log('y is 20')
// } else {
//     console.log('y is String 20')
// }

//if..elseif..else statement
// const z = 89;
// if(z > 100){
//     console.log('z is greater then 100');
// } else if(z > 80) {
//     console.log('z is greater then 80');
// } else if(z > 60) {
//     console.log('z is greater then 60');
// } else if(z > 40) {
//     console.log('z is greater then 40');
// } else if(z > 20) {
//     console.log('z is greater then 20');
// } else {
//     console.log('z is lesser then 20');
// }

//OR and AND operators
// const x = 20;
// const y = 30;

// if(x === 20 || y === 40){
//     console.log('Any one of the statement is true');
// }

// if(x === 20 && y === 30){
//     console.log('Both of the statement are true');
// }

//Ternary Operator
// const z = 10;
// let color;

// if(z > 10){
//     color = 'red'
// } else {
//     color = 'blue'
// }

// console.log(color);

// const color2 = z > 9 ? 'red' : 'blue';
// console.log(color2);

//Switch Statement
// const color = 'green';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'green':
//     case 'blue':
//         console.log('color is green or blue');
//         break;
//     case 'pink':
//         console.log('color is pink');
//         break;
//     default:
//         console.log('No color was matched');
// }

//Functions
//Method #1 - Function decleration
function addNums(num1, num2) {
    console.log(num1 + num2)
}

addNums(22, 12);

//Method #2 - Function expressions
const multiNums = function(num1, num2) {
    return num1 * num2
}

console.log(multiNums(22, 12));

//Method #3 - Arrow Functions
const modNums = (num1, num2) => {
    return num1 % num2
}

console.log(modNums(22, 12));

//Method #4 - Condensed Arrow Functions
const divNums = num => num / 4

console.log(divNums(22));


// lang.forEach(it => console.log(it.year))