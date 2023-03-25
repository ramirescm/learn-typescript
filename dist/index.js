"use strict";
// Basic types
let age = 5;
const firstName = '';
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4];
const states = [true, true, false];
const names = ['Quarks', 'Protons', 'Neutros'];
// Tuple
const person = [1, 'Jim'];
const people = [
    [1, 'A'],
    [2, 'B'],
    [3, 'C']
];
// Intersections allow any type
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Down;
// Type Assertions
const productName = 'teste';
// We can change the type during association
let itemName = productName;
let itemName2 = productName;
console.log(age);
