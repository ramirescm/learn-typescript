// Basic types

let age: number = 5;
const firstName = '';
const isValid: boolean = true;
let idk: any = 5;
idk = '12';
idk = true;

const ids: number[] = [1,2,3,4];
const states: boolean[] = [true, true, false]
const names: string[] = ['Quarks','Protons','Neutros']

// Tuple
const person:  [number, string] = [1, 'Jim'];
const people: [number, string][] = [
    [1, 'A'],
    [2, 'B'],
    [3, 'C']
]

// Intersections allow any type
const productId: string| number | boolean  = false;

// Enum
enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Down;

// Type Assertions
const productName: any = 'teste';
// We can change the type during association
let itemName = productName as string; 
let itemName2 = <string>productName;

console.log(age);



