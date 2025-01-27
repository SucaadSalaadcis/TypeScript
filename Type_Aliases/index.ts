/* type: A TypeScript keyword used to define a custom type or alias. It’s like creating your own data structure to specify the shape of objects.
User: The name of the type. It's capitalized (by convention) because it represents a model or blueprint. */


type User = {
    name: string;
    age: number;
    location: string
}

/* User: The name of the function's parameter. This will receive the User object passed to the function.
:: Specifies the type for the User parameter.
User: This refers to the custom type we defined earlier. It ensures the parameter must match the User structure. */

const printUserInfo = (User: User) => {
    return `Name: ${User.name} Age: ${User.age} Location: ${User.location}`
}

const res3 = printUserInfo({ name: 'Alex', age: 20, location: 'Dubai' });

console.log(res3);


// Basic obj type aliases
type User2 = {
    name: string;
    age: number;
    email: string;
};

const user: User2 = {
    name: "Alex",
    age: 25,
    email: "alex@example.com",
};
console.log(user);

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
