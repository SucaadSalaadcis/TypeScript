const person: { firstName: string; lastName: string; age: number } = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
// console.log(person);

// objects as funcion 
function printUser(): { name: string; age: number; location: string } {
    return {
        name: 'Xuxn',
        age: 20,
        location: 'China'
    }
}

// const res2 = printUser().name;
const res2 = printUser();
console.log(res2);

// in typeScript code :  make sure to complete your code or you get an error so don't focus it fisrt
// unless you complete your code and there is error