import { Invoice } from './classes/Invoice.js'; //Import .js file even if we are working in ts
import { ListClass } from './classes/ListClass.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Ganesh', '25/08/2023', 8000);
docTwo = new Payment('Kartik', '12/10/2023', 7500);
let allDocs = [];
allDocs.push(docOne);
allDocs.push(docTwo);
console.log(allDocs);
//   *** Until this Inferences Taught ***
// Earlier Code got & made changes to it
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//  >> List Template Instance
const ul = document.querySelector('ul');
const getList = new ListClass(ul);
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let document;
    if (type.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    //
    getList.render(document, type.value, 'end');
});
