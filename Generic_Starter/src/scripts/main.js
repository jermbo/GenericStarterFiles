const something = 'something';
console.log(something);

const person = {
    firstName: 'jerm',
    lastName: 'law',
    age: 33
};

let thing;

const {
    firstName,
    lastName,
    age
} = person;
console.log(`${firstName} ${lastName} ${age}`);

const { x, y, ...z } = { x:1, y: 2, a: 3, b: 4};

