type ID = string | number;

const userId: ID = 123; // Can be a string or number
const postId: ID = "post_456"; // Works as well
console.log(userId);
console.log(postId);

// axample 2
const All_items: (number | string)[] = [1, 3, 4, 'Hello'];
console.log(All_items);

// example 3
type UserInfo = {
    firstName: string;
    lastName: string;
    age: number
}
type AccountDetails = {
    email: string;
    password: string;
}

let User: UserInfo | AccountDetails = {
    //    firstName: 'John',
    //    lastName: 'Doe',
    //    age: 20,
    // you can only use one of them userInfo or AccountDeatails in the obj
    email: 'suu@gmail.com',
    password: 'password123'
}
console.log(User);
console.log(User.email);