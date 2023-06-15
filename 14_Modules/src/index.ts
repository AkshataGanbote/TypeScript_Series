import { Invoice } from './classes/Invoice.js'; //Import .js file even if we are working in ts

const invoice1 = new Invoice ('Ram', '03/08/2021', 2000);
const invoice2 = new Invoice ('Sita', '19/02/2022', 1500);

console.log(invoice1); 

let invoices: Invoice[] = []; 

invoices.push(invoice1);
invoices.push(invoice2);

invoice2.amount = 5000;

console.log(invoices);

invoices.forEach (inv =>{
    console.log(inv.client, inv.amount); 
    console.log(inv.format());
});


