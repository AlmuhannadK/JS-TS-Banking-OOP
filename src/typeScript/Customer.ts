import { Transaction } from "./Transaction";

export class Customer {
  private name: string;
  private id: number;
  private transactions: Transaction[];
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.transactions = [];
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTransactions() {
    return this.transactions;
  }

  getBalance() {
    let balance: number = 0;

    const transactionList: Transaction[] = this.getTransactions();

    transactionList.forEach((transaction: Transaction) => {
      balance += transaction.getAmount();
    });
    return balance;
  }

  addTransactions(transactionAmount: number) {
    let balance = this.getBalance();

    let newBalance = balance + transactionAmount;
    if (newBalance > 0) {
      this.transactions.push(new Transaction(transactionAmount, new Date()));
      console.log(`Successful transaction new balance is (${newBalance})`);
    } else {
      console.error(
        `sorry this transactions cannot be completed due to low balance (${balance})`
      );
    }
  }
}

export default {};
