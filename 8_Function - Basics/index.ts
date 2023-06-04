// (A) Function Declaration without parameters

let greet : Function;

greet = 'hello;' //Error

greet = () => {
    console.log("Hello World!");
}
greet();

// (B) Function Declaration with REQUIRED parameters

//1 : Normal
const required = (a:number, b:number) =>{
    console.log(a+b);
}

required(5,10);

// 2 : With default values
const add = (a:number = 30, b:number=40) =>{
    console.log(a+b);
}
add(); //output -> 70
add(10, 20); //output -> 30 , it overwrites default values



// (C) Function Declaration with OPTIONAL parameters

// 1 
const optional = (a:number = 100, b? : number ) =>{   // To make optional put ? Otherwise it will show error at the function calling stage 
    console.log(a);
    console.log(b); //output -> undefined as value not specified in function call
}

optional();

//2 - Union types
const optional2 = (a:number, b? : number|string ) =>{  
    console.log(a);
    console.log(b); //output -> 10
}

optional2(5,10); //output -> 5 10
optional2(5, 'Aksha'); //output -> 5 Aksha


//3 - Default value to optional
const optional3 = (a:number, b : number|string = 'Hey') =>{    // NO question mark here because default value given 
    console.log(a);
    console.log(b); //It will print default value even if we don't pass value in function call as it is default value
}

optional3(65); //output -> 65 then Hey



// (D) Returns Specific type of value  - Here number
// If we don't return anything then it will return void

const minus = (a: number, b: number): number => {
    return a + b;
}
  
let result = minus(10,7);
console.log(result);
