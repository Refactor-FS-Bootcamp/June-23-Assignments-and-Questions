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
const person = {
    firstName: 'Nabendu',
    'last Name': 'Biswas',
    age: 41,
    rating: 5.5,
    isDeveloper: true,
    hobbies: ['coding', 'teaching', 'youtubing'],
    address: {
        hno: 95,
        city: 'Bhopal',
        state: 'MP'
    }
}

console.log(person.firstName);
console.log(person['last Name']);
console.log(person.hobbies[1]);
console.log(person.address.city);

console.log(Object.keys(person));
console.log(Object.values(person));