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
