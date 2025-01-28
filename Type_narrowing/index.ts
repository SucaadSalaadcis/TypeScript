// Type narrowing helps TypeScript understand the exact type within a block of code.

type myType = string | number;

function exampleFunction(value: myType): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

exampleFunction('hello');
exampleFunction(10);



// example 2
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String value: ${value.toUpperCase()}`);
    } else {
        console.log(`Number value: ${value + 10}`);
    }
}

printValue("Hello"); // Output: String value: HELLO
printValue(42);      // Output: Number value: 52
