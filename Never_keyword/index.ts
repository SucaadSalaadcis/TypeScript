

/*     This indicates that the function will never successfully complete its execution. It either throws an error or causes the program to exit in some way.
    throw new Error(msg);
    This line throws an error with the message msg.
    Since the function throws an error, it doesn't return a value and immediately halts execution.  */
    
function throwError(msg: string): never {
    // This function throws an error and does not return any value
    throw new Error(msg); 
};


function infiniteLoop(): never {
    // This means the function never returns or reaches the end of its execution.

    while (true) { } 
    // loop runs indefinitely, meaning the function will continue executing forever without returning.
}

// The never type means x can never be assigned a value under normal conditions because never represents a type that is unreachable
let x: never;

// Function that will also never return
function neverReturns(): never {
    // This function runs indefinitely due to the infinite loop
    while (true) { }
}

// Assigning the result of a never-returning function to the variable `x`
// This is valid because both the variable and the function return type are `never`
x = neverReturns();
