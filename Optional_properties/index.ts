type Car = {
    make: string;
    readonly model: string; // means you can't change the value
    year?: number; // Optional property
};

const car1: Car = { make: "Toyota", model: "Corolla" }; // year is optional
const car2: Car = { make: "Honda", model: "Civic", year: 2023 }; // year included
// car1.model = 'Something' error ❌ : Cannot assign to 'model' because it is a read-only property.
console.log(car1.make);
console.log(car1);
console.log(car2);