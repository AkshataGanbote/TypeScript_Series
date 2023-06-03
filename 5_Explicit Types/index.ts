// (**) Explicit Types of 

// (A) Variables
let person: string;
var age: number;
let isLoggedIn = 10;

/*
const gender = 'male';
gender = 'female'; 
console.log(gender)
*/


// (B) Arrays

let friends: string[] = []; // 1: Empty array declaration
friends.push('Ram');
friends.push(false); 
friends.push(10); 



let ages: number[]; 
ages = [20,10,30]; //2: Values array declaration
ages.push('Ram');


// (C) Union Types

// 1: Variables
let uid: string|number;
uid = 'ABC';
uid = 10;
uid = false;

// 2: Array
let mixed: (string|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20); 
console.log(mixed);


// (D) Objects

let user: {
    name: string,
    age: number,
    gender: string,
};

user = { name: 'Jai', age: 20, gender: 'male' };
user = { name: 'Jai', age: 20}; //All properties must be there 
user = { name: 'Sai', age: 30, gender: 'male', passion:'singing'}; //Cannot add additional properties