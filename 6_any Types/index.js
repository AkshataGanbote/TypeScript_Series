// (**) Explicit Types of 
// (A) Variables
var person;
var age;
var isLoggedIn = 10;
/*
const gender = 'male';
gender = 'female';
console.log(gender)
*/
// (B) Arrays
var friends = []; // 1: Empty array declaration
friends.push('Ram');
friends.push(false);
friends.push(10);
var ages;
ages = [20, 10, 30]; //2: Values array declaration
ages.push('Ram');
// (C) Union Types
// 1: Variables
var uid;
uid = 'ABC';
uid = 10;
uid = false;
// 2: Array
var mixed = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);
// (D) Objects
var user;
user = { name: 'Jai', age: 20, gender: 'male' };
user = { name: 'Jai', age: 20 }; //All properties must be there 
user = { name: 'Sai', age: 30, gender: 'male', passion: 'singing' }; //Cannot add additional properties
