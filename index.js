class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(newBranch) {
    if (this.checkBranch(newBranch)) {
      console.error(`Branch (${newBranch.name}) already exists`);
    } else {
      this.branches.push(newBranch);
      console.info(`New branch (${newBranch.name}) added successfully!`);
    }
  }

  addCustomer(branchToAddIn, customerToAdd) {
    if (this.checkBranch(branchToAddIn)) {
      branchToAddIn.addCustomer(customerToAdd);
    } else {
      console.error(
        `sorry this branch does not exists this bank (${this.name})`
      );
    }
  }

  addCustomerTransaction(branch, addToCustomer, transaction) {
    if (this.checkBranch(branch)) {
      branch.addCustomerTransaction(addToCustomer, transaction);
    } else {
      console.error(
        `sorry this branch does not exists this bank (${this.name})`
      );
    }
  }

  findBranchByName(branchName) {
    const branchesToFind = this.branches.filter((branch) => {
      if (branch.name.toLowerCase().includes(branchName.toLowerCase())) {
        return branch;
      }
    });
    return branchesToFind;
  }

  checkBranch(branch) {
    const branchExists = this.branches.some((branchToFind) => {
      return branchToFind.name === branch.name;
    });
    return `branchExists`;
  }

  listCustomers(branch, includeTransactions) {
    if (this.checkBranch(branch)) {
      const customers = branch.getCustomers();

      return customers;
    }
  }
}

class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  checkCustomer(customerToFind) {
    const customerExists = this.customers.some((customer) => {
      return customer.id === customerToFind.id;
    });
    return customerExists;
  }

  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customerToAdd) {
    if (this.checkCustomer(customerToAdd)) {
      console.error(`Customer (${customerToAdd.name}) already exists`);
    } else {
      this.customers.push(customerToAdd);
      console.info(
        `New customer (${customerToAdd.name}) added successfully! to (${this.name})`
      );
    }
  }
  addCustomerTransaction(addToCustomer, transactionToAdd) {
    if (this.checkCustomer(addToCustomer)) {
      addToCustomer.addTransactions(transactionToAdd);
    } else {
      console.error(
        `sorry this customer does not exists this branch (${this.name})`
      );
    }
  }
}

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
    return this.transactions;
  }

  getBalance() {
    let balance = 0;
    this.getTransactions().forEach((transaction) => {
      balance += transaction.amount;
    });
    return balance;
  }

  addTransactions(transactionToAdd) {
    let balance = 0;
    this.transactions.forEach((transaction) => {
      balance += transaction.amount;
    });

    let newBalance = balance + transactionToAdd.amount;
    if (newBalance > 0) {
      this.transactions.push(transactionToAdd);
      console.log(`Successful transaction new balance is (${newBalance})`);
    } else {
      console.error(
        `sorry this transactions cannot be completed due to low balance (${balance})`
      );
    }
  }
}

class Transaction {
  constructor(amount, date) {
    this.amount = amount;
    this.date = date;
  }
}

const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(
  westBranch,
  customer1,
  new Transaction(3000, "01.01.2024")
);
arizonaBank.addCustomerTransaction(
  westBranch,
  customer1,
  new Transaction(3000, "01.01.2024")
);
arizonaBank.addCustomerTransaction(
  westBranch,
  customer2,
  new Transaction(3000, "01.01.2024")
);

customer1.addTransactions(new Transaction(-1000, "01.01.2024"));
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
