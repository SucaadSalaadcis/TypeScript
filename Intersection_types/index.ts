type Person = {
    name: string;
    age: number;
};

type Employee = {
    company: string;
    role: string;
};

// An intersection type in TypeScript combines multiple types into one. using & symbol
type WorkingPerson = Person & Employee;

const worker: WorkingPerson = {
    name: "Sam",
    age: 30,
    company: "TechCorp",
    role: "Developer",
};


console.log(`Name: ${worker.name} , Age: ${worker.age} , Company: ${worker.company} , role: ${worker.role}`);