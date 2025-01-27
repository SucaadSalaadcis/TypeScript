
// A type alias in TypeScript is a way to give a name to a type. Instead of writing the same type repeatedly, you can define it once using a type alias and reuse it wherever needed. 
type Age = number;
const myAge: Age = 25; // 'Age' is just a nickname for 'number'

// example 2
type person = {
    name: string;
    age: number;
};

const user: person = {
    name: "Alex",
    age: 30,
};
// Without the alias, you’d have to repeatedly write:
const user2: { name: string; age: number } = { name: "Alex", age: 30 };



// example 3
// User: The name of the type. It's capitalized (by convention) because it represents a model or blueprint.
type User = {
    name: string;
    age: number;
    location: string
}

/* User: The name of the function's parameter. This will receive the User object passed to the function.
:: Specifies the type for the User parameter.
User: This refers to the custom type we defined earlier. It ensures the parameter must match the User structure. */

const printUserInfo = (user: User) => {
    return `Name: ${user.name} Age: ${user.age} Location: ${user.location}`
}

const res3 = printUserInfo({ name: 'Alex', age: 20, location: 'Dubai' });

console.log(res3);


// Basic obj type aliases
type User2 = {
    name: string;
    age: number;
    email: string;
};

const user3: User2 = {
    name: "Alex",
    age: 25,
    email: "alex@example.com",
};
console.log(user3);

// arrays 
type StringArray = string[];
type NumberArray = Array<number>;
type MixedArray = (string | number)[];

const names: StringArray = ["Alice", "Bob"];
const scores: NumberArray = [98, 87, 92];
const mixed: MixedArray = ["Alice", 10, "Bob", 20];
console.log(names);
console.log(scores);
console.log(mixed);

// union types
type ID = string | number;
const userId: ID = 123; // Can be a string or number
const postId: ID = "post_456"; // Works as well
console.log(userId, postId);

// function  type 
type Add = (a: number, b: number) => number;

const addNumbers: Add = (x, y) => x + y;

console.log(addNumbers(10, 20)); // Output: 30
