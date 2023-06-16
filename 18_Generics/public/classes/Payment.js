export class Payment {
    constructor(receiver, details, amount) {
        this.receiver = receiver;
        this.details = details;
        this.amount = amount;
    }
    // This format method should be here because Formatter specified the structure
    // If we remove this & put anything else  --> ERROR will be thrown
    format() {
        return (`${this.receiver} is owed ${this.amount} for ${this.details}`);
    }
}
