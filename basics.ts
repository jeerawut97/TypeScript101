// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 24;
age = 12.1;

let userName: string;
userName = 'o_O';

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
}

// person = {
//     isEmployee: true
// }

let people: Person[];

// Type Inference
let course: string | number = 'React - The Complete Guide';
course = 12341;
