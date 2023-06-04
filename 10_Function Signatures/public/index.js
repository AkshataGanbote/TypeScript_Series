"use strict";
// let greet: Function;
// Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Error example
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Example 2
// (A) If we give return type -> Else statement is required
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    //If we don't provide else it will throw error
    else {
        return numOne - numTwo;
    }
};
//B If we Do NOT give return type -> Else statement is NOT required
let calc1;
calc1 = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
};
// Example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
