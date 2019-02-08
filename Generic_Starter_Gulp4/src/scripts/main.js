const something = "something";
console.log(something);

const person = {
  firstName: "jerm",
  lastName: "law",
  age: 33,
};

const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined
console.log(baz);
console.log(safe);

let thing;

const { firstName, lastName, age } = person;
console.log(`${firstName} ${lastName} ${age}`);

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

console.log(x, y, z.a)
