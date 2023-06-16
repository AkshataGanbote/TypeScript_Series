import { Formatter } from "../Interfaces/Formatter.js";

export class Invoice implements Formatter {
    
    constructor(   
        readonly client : string,
        private details: string,
        public amount: number, 
    ){}

    // This format method should be here because Formatter specified the structure
    // If we remove this & put anything else  --> ERROR will be thrown
    format(){
        return (`Received ${this.amount} from ${this.client} on ${this.details}`);
    }

}