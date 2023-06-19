import { Formatter } from "../Interfaces/Formatter.js";

export class Payment implements Formatter {  // implements
    
    constructor(   
        readonly receiver : string,
        private details: string,
        public amount: number, 
    ){}

    // This format method should be here because Formatter specified the structure
    // If we remove this & put anything else  --> ERROR will be thrown

    format(){
        return (`${this.receiver} is owed ${this.amount} for ${this.details}`);
    }

}