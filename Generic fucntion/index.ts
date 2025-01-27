/* function functionName<T>(parameter: T): T {
    return parameter;
  }
    syntax
   */


function identity<T>(value: T): T {
    return value;
}

const numberResult = identity(42);          // T becomes number
const stringResult = identity("Hello");    // T becomes string

console.log(numberResult); // 42
console.log(stringResult); // Hello



// Generic Function with Multiple Types
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const pairResult = pair("Alice", 25); // T is string, U is number
console.log(pairResult); // ["Alice", 25]



//   Using Generics with Arrays
function reverseArray<T>(items: T[]): T[] {
    return items.reverse();
}

const numbers = reverseArray([1, 2, 3, 4]); // T is number
const strings = reverseArray(["a", "b", "c"]); // T is string

console.log(numbers); // [4, 3, 2, 1]
console.log(strings); // ["c", "b", "a"]
