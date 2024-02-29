export class Transaction {
  private amount: number;
  private date: Date;
  constructor(amount: number, date: Date) {
    this.amount = amount;
    this.date = date;
  }

  getAmount() {
    return this.amount;
  }
}


