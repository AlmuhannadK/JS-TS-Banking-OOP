class Customer {
  constructor(name, id) {
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
    return this.transactions
  }

  getBalance() {
    let balance = 0;
    this.getTransactions().forEach((transaction) => {
      balance += transaction.getAmount();
    });
    return balance;
  }

  addTransactions(transactionAmount) {
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
