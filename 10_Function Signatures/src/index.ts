// let greet: Function;

// Example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {  //This should Match (like signature) with the above given pattern 
    console.log(`${name} says ${greeting}`);
}

//Error example
greet = (name: number, greeting: string) => {  //This should Match (like signature) with the above given pattern otherwise error
    console.log(`${name} says ${greeting}`);
}


// Example 2

// (A) If we give return type -> Else statement is required
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } 

    //If we don't provide else it will throw error
    else {
        return numOne - numTwo;
    }
}


//B If we Do NOT give return type -> Else statement is NOT required

let calc1: (a: number, b: number, c: string) => void;

calc1 = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } 
}



// Example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}