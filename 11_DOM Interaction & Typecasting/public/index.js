"use strict";
//(A) Exapmle 1: Passing tag under querySelector
const anchor = document.querySelector('a');
console.log(anchor);
// console.log(anchor.href); //Error
//Insteadd We can do following 2 things 
//1 :- Adding If statement  
if (anchor) {
    console.log(anchor.href);
}
// OR
// 2:- Adding ! after querySelector 
const anchor1 = document.querySelector('a'); //put ! after bracket
console.log(anchor1.href);
// (B) Exapmle 2: Passing any class or id under querySelector 
const form = document.querySelector('.new-item-form');
console.log(form);
//inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// console.log(type) -access 1 element only
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
