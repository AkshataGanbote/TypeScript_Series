
// (A) ARRAYS:-

let chars = ['a', 'b'];

// chars = 'Aksha';  - ERRROR : Type array CANNOT be changed to type String

chars.push('x');   
console.log(chars);

// 1 :- ERROR 
// In TS it is showing error for 30 as different Argument type BUT in JS it does NOT throw any error it just prints the charsay a,b,x,30
chars.push(30);
console.log(chars);

// (B) MIXED ARRAYS:-

let mixed = ['ram', '100', 'shyam', '10'];

// 2 :- NO Error 
// As it is mixed array
mixed.push('jui');
mixed.push('20');

// 3:- ERROR - As boolean type is NOT included in initial array, If it is included in initial array then NO Error
mixed.push(false);

console.log(mixed);


// (C) OBJECTS :-


let person = {
    name: 'ram',
    age: 30,
    gender: 'male',
};


person.name = 'Jui';
// 1: ERROR -> Type changed
person.name = 30; 


// 2:- ERROR -> CANNOT add additional properties in the initial object

person.skills = ['singer', 'fighter'];

person = {
    name: 'sai',
    age: 20,
    gender: 'female',
    skills: ['singer', 'fighter'] //ERROR -> CANNOT add additional properties in the initial object
};