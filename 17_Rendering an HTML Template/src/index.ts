import { Invoice } from './classes/Invoice.js'; //Import .js file even if we are working in ts
import { ListClass } from './classes/ListClass.js';
import { Payment } from './classes/Payment.js';
import { Formatter } from './Interfaces/Formatter.js';


let docOne : Formatter;
let docTwo : Formatter;

docOne = new Invoice('Ganesh', '25/08/2023', 8000); 
docTwo = new Payment('Kartik', '12/10/2023', 7500); 

let allDocs : Formatter[] = [];
allDocs.push(docOne);
allDocs.push(docTwo);

console.log(allDocs); 

//   *** Until this Inferences Taught ***


// Earlier Code got & made changes to it

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//  >> List Template Instance
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




