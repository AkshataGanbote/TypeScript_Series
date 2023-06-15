// Run *tsc -w* in terminal to see console 
// Same code as of 12th Class. ONLY Comments of this class are added


// Default behaviour is Public - No need to explicitly mention public
class Invoice {
    /*
    // (A) Access modifiers

    readonly client : string;   // Makes this property - accessible / read outside of class but CANNOT change/modify it  
    private date: string;      // Makes this property - ONLY accessible within this class 'Invoice' & cannot access outside of class
    public amount: number;    // Default behaviour -> Access inside & outside of class 'Invoice'
    */

    // (B) ^ We CAN define all of the above 3 properties directly inside constructor function as below
    
    constructor(   // Here we have to give comma ,  instead of semicolon ; 
        readonly client : string,
        private date: string,
        public amount: number, 
    ){}

    /* // This is earlier
    constructor(c : string, d : string, a : number){
        this.client = c;
        this.date = d;
        this.amount = a;
    }
    */

    format(){
        return (`Received ${this.amount} from ${this.client} on ${this.date}`);
    }

}

const invoice1 = new Invoice ('Ram', '03/08/2021', 2000);
const invoice2 = new Invoice ('Sita', '19/02/2022', 1500);

console.log(invoice1); 

let invoices: Invoice[] = []; 

invoices.push(invoice1);
invoices.push(invoice2);

invoice1.client = 'Hari'; // ERROR -> ReadOnly - Cannot change -> But it will print Hari in the output
invoice2.amount = 5000;

console.log(invoices);

invoices.forEach (inv =>{
    console.log(inv.client, inv.amount);  // inv.date - ERROR -> private
    console.log(inv.format());
});


