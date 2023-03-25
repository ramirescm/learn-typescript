// Type

type User = {
    name: string;
    age?: number;
    email: string;
};

type Order = {
    id: string;
    user: User;
}

const order: Order = {
    id: 'a1',
    user: { name: 'maria' } as User
}

const user: User = {
    name: 'abc',
    age: 3,
    email: 'abc@abc.com'
}

let ageOk = user.age!; // using ! in nulable variable works a bypass ignoring undefined values

console.log(ageOk)

// Unions
type Author = {
    books: string[]
}

// Using unions variable author has props user and author
const author: Author & User = {
    books: ['a', 'b'],
    name: 'aaaa',
    age: 2,
    email: 'aaaa@ssss.com'
}

// Interfaces
interface Product {
    id: number;
    name: string;
    readonly email: string; // dont permit change
}