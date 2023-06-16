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




// GENERICS CODE

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
  
  let docOne = addUID({name: 'Laxmi', age: 40});
  //let docTwo = addUID('shaun');
  
  console.log(docOne.name);
  
  // with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}
  
const docThree: Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: { name: 'shaun' }
};
  
const docFour: Resource<string[]> = {
    uid: 1, 
    resourceName: 'shoppingList', 
    data: ['bread', 'milk']
};
  
console.log(docThree, docFour);




