
type Direction = "north" | "south" | "east" | "west";
const move: Direction = "north"; // Must be one of the defined literals
// const invalidMove: Direction = "up"; // Error
console.log(move);


let colors: 'red' | 'yellow' | 'purple';
colors = 'red';
// colors= 'white'; error ❌ : Type '"white"' is not assignable to type '"red" | "yellow" | "purple"'
console.log(colors);