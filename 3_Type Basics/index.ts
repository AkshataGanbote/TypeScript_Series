var character = 'mario';
let age = 30;
let isGood = false;

// ** Lesson 1 :- Can assign different value but  
//                CANNOT assign different value TYPE

// character = 30;
character = 'Akshata';
console.log(character);

// age = false;
age = 50;


// ** Lesson 2 :- We can directly assign variable TYPE to any variable                

// 1
const circle1 = (diameter) =>{
    return diameter * Math.PI;
}
console.log(circle1('Akshata')); //If we save till this & compile it will return NaN

// 2 -> It will show error message
const circle2 = (diameter: number) =>{
    return diameter * Math.PI;
}
console.log(circle2('Akshata')); //If we save till this & compile it will return NaN 

// 3
const circle3 = (diameter: number) =>{
    return diameter * Math.PI;
}
console.log(circle3(10.5)); //If we save till this & compile it will return 32.98672286269283 which is correct answer