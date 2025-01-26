
/* A function with a void return type is not allowed to return anything.
 If you try to return a value, TypeScript will throw an error. */


/* function printName(name: string) {
   console.log(`Hello, ${name}!`);
   // If you don't explicitly specify a return type for a function, 
   // TypeScript will infer void if there is no return statement in the function.  
};
*/


function printName(name: string): void {
    console.log(`Hello, ${name}!`);
    // return name; ❌ Error
}
printName("John"); // ✅ Works


