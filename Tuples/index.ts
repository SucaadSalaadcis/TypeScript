/* A tuple in TypeScript is a fixed-length array where each element has a specific type.
 Unlike regular arrays (where all elements are of the same type), a tuple allows you to define a structure with different types for each position. */

let user5: [string, number];
user5 = ["Alice", 25]; // ✅ Correct
// user5 = [25, "Alice"]; // ❌ Error: Order and types must match
// user5 = ["Alice"];     // ❌ Error: Missing the second element
// user5 = ['num', 4, 'test'] // ❌ Error:  target allows only 2



// Tuple with Multiple Types
let product: [number, string, boolean];
product = [101, "Laptop", true]; // ✅ Correct



// Tuple with Optional Elements
let user6: [string, number?];
user6 = ["Alice"];         // ✅ Second element is optional
user6 = ["Alice", 30];     // ✅ Both elements are provided
// user = [30, "Alice"];  // ❌ Error: Order and types must match



// Destructuring Tuples
let user7: [string, number] = ["Alice", 25];
const [userName, age] = user7;

console.log(userName); // "Alice"
console.log(age);  // 25
