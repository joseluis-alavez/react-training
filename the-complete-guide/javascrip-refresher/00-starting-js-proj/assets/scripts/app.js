///import * as util from "./util.js";

//console.log(util.apiKey + " fff");
//console.log(util.abc + " fff");
//console.log(util.def + " fff");

// console.log("Importando todo el modulo");

// function abc(userName, message) {
    
//     return "Hi I am " + userName + " " + message;
// }

// console.log(abc("John", "Hello"));


// const user = {
//     userName: "John",
//     age: 30,
//     city: "New York",
//     sayHello: () => {
//         console.log("Hello, I am " + user.userName);
//     }
// }

// console.log(user);

// const { userName, age, city } = user;

// console.log(userName, age, city);

// user.sayHello();


// class User {
//     constructor(userName, age, city) {
//         this.userName = userName;
//         this.age = age;
//         this.city = city;
//     }
//     sayHello() {
//         console.log("Hello, I am " + this.userName);
//     }
// }

// const user2 = new User("Jane", 25, "Los Angeles");

// console.log(user2);

// user2.sayHello();

const hobbies = ["Sports", "Cooking"];

console.log(hobbies);

hobbies.push("Reading");

console.log(hobbies);

console.log(hobbies[1])

const index = hobbies.findIndex(hobby => hobby === "Cooking");

console.log(index);

const newHobbies = hobbies.map(item => item + " is fun");

console.log(newHobbies);

const hobbies2 = ["Reading", "Coding"];

const allHobbies = [...hobbies, ...hobbies2];

console.log(allHobbies);




function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    
    return numberArray.map(item => ({val: item}))
}


const newAr = transformToObjects([11,22,3]);


console.log(newAr);

const [firstName, lastName] = ["John", "Doe"];

console.log(firstName, lastName);

const {firstName: firstName2, lastName: lastName2} = {firstName: "Jane", lastName: "Doe"};

console.log(firstName2, lastName2);


const password = prompt("Enter your password");

if (password === "123456") {
    console.log("Password is correct");
} else {
    console.log("Password is incorrect");
}


for (const hobby of allHobbies) {
    console.log(hobby);
}

function handleTimeOut() {
    console.log("Timeout!!");
}

const handleTimeout2 = () => {
    console.log("Timeout again!!");
}


setTimeout(handleTimeOut, 2000);
setTimeout(handleTimeout2, 2000);

setTimeout(() => console.log("Timeout again ddddddd!!"), 4000);

function handleClick(myFunction) {
    myFunction();
}

handleClick(() => console.log("Hello!"));

