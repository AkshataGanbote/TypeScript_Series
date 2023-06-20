export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // This format method should be here because Formatter specified the structure
    // If we remove this & put anything else  --> ERROR will be thrown
    format() {
        return (`${this.client} owes ${this.amount} for ${this.details}`);
    }
}
