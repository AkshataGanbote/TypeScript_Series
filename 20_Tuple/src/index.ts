import { Invoice } from './classes/Invoice.js'; //Import .js file even if we are working in ts
import { ListClass } from './classes/ListClass.js';
import { Payment } from './classes/Payment.js';
import { Formatter } from './Interfaces/Formatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul') ! ;
const getList = new ListClass(ul);


form.addEventListener('submit', (ev: Event)=>{
    ev.preventDefault();

    let document : Formatter;

    if(type.value === 'invoice'){
        document = new Invoice (toFrom.value, details.value, amount.valueAsNumber);
    }else{
        document = new Payment (toFrom.value, details.value, amount.valueAsNumber);
    }

    //
    getList.render(document, type.value, 'end')
});


// ENUMS


// (A) Numeric Enums - Default
enum ResourceType { 
    BOOK, 
    AUTHOR, 
    FILM, 
    DIRECTOR 
};

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,  //
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR, //
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);


// (B) Numeric Enums - Fully Initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

  
console.log(StatusCodes.NotFound); // logs 404
  
console.log(StatusCodes.Success);// logs 200


// (C) String Enums

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
  
console.log(CardinalDirections.North); // logs "North"

console.log(CardinalDirections.West); // logs "West"