// const nums: number[] = [1, 2, 'string', true]; error b/c you alrealy mention the type of array
const nums: number[] = [1, 2, 4, 6];
console.log(nums);

const string: string[] = ['one', 'two', 'four', 'six'];
console.log(string);


const items: string[] = [];
items.push('apple', 'mango', 'strawberry', 'milk');
// items.push(12); //  error : type 'number' is not assignable to parameter of type 'string'.
console.log(items);

const numList: number[] = [];
numList.push(12);
// numList.push(true); // error:  type 'boolean' is not assignable to parameter of type 'number'.
console.log(numList);

// another way of creating array
const listName: Array<string> = ['susu', 'dudi', 'samu'];
console.log(listName);

const listNum: Array<number> = [1, 3];
console.log(listNum);

