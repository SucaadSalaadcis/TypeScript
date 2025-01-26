// Regular func
// function addOne(params : type);

function addOne(num: number) {
    return num + 1;
}

let res = addOne(7);
console.log(res);

// Arraw function

const double = (x: number, y: number) => x * y;
const result = double(2, 2);
// const result = double(2, 2, 4); error: expected 2 arguments
console.log(result);
