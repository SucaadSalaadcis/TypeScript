
// function greet(person = 'Anonymous') {
//     return `Hello ${person}`;
// }

function greet(person: string = 'Anonymous') {
    return `Hello ${person}`;
}

const test = greet('suad');
console.log(test);