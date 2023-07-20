const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello my name is Iamhaao');

//ArrowFUnction
const a = 7;
const b = 3;
const sumary = (a, b) => a + b;

console.log(sumary(a, b));

//Object 
const person = {
    firstName: "Lê",
    lastName: "Hào",
    age: 14,
    fullName() { console.log(this.firstName + this.lastName) }
}

person.fullName()

//Array
const hobbies = ['Sports', 'cooking', 'Travel'];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hooby:' + hobby));

//... Để gom thành array

const toArray = (...args) => {
    return args;
}
console.log(toArray(1, 2, 3));
//Destructuring 

const printName = ({ age }) => {
    console.log(age)
}
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby2, hobby3);
printName(person);

//Async & Promiese
setTimeout(() => {
    console.log('timer is done!');
}, 2000);

console.log('Hello');
