const something = 'something';
console.log(something);

const person = {
    firstName: 'jerm',
    lastName: 'law'
};

let thing;

const {
    firstName,
    lastName
} = person;
console.log(`${firstName} ${lastName}`);

const { x, y, ...z } = { x:1, y: 2, a: 3, b: 4};
