
let num: number = 42; // 'num' must always be a number
let str: string = "Hello, TypeScript!"; // 'str' must always be a string
let isDone: boolean = false; // 'isDone' must always be a boolean
// num = "Not a number"; // ❌ Error: Type 'string' is not assignable to type 'number'



// Regular func 
function double1(x: number): number {
    return x * x
}

const res1 = double1(2);
console.log(res1);

// Arrow fucn
const double2 = (x: number): number => x * x;
console.log(double2(3));