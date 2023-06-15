export class Invoice {
    constructor(client, date, amount) {
        this.client = client;
        this.date = date;
        this.amount = amount;
    }
    format() {
        return (`Received ${this.amount} from ${this.client} on ${this.date}`);
    }
}
