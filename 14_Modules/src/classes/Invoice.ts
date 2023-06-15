export class Invoice {
    
    constructor(   
        readonly client : string,
        private date: string,
        public amount: number, 
    ){}

    format(){
        return (`Received ${this.amount} from ${this.client} on ${this.date}`);
    }

}