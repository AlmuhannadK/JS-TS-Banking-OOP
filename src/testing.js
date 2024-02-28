class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch) {
    if (this.branches.includes(branch)) {
      this.branches.push(branch);
    }
  }

  addCustome(branch, customer) {
    if (this.branches.includes(branch)) {
      branch.addCustomer(customer);
    }
  }

  addCustomerTransaction(branch, customerId, amount) {
    const locateBranch = this.branches.find(
      (branchElement) => branchElement.getName() === branch.getName()
    );
    if (locateBranch) {
      return locateBranch.addCustomerTransaction(customerId, amount);
    }
  }

  //addCustomer(branch, customer)

  //addCustomerTransaction(branch, customerId, amount)

  //findBranchByName(branchName)

  //checkBranch(branch)

  //listCustomers(brnach)
}

class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }

  addCustomer(customer) {
    if (this.customers.includes(customer)) {
      console.error("Customer already exists");
    } else {
      this.customers.push(customer);
    }
  }

  addCustomerTransaction(customerId, amount) {
    const customer = this.customers.find(
      (customerElement) => customerElement.getId() === customerId
    );
    if (customer) {
      return customer.addTransaction(amount);
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
  getTransaction() {
    return this.transactions;
  }

  getBalance() {
    let balance = 0;
    this.transactions.forEach((transaction) => {
      balance += transaction.amount;
    });
    return balance;
  }

  addTransactions(amount) {
    if (amount > 0) {
      const transaction = new Transaction(amount, new Date());
      this.transactions.push(transaction);
    }
  }
}

class Transaction {
  constructor(amount, date) {
    this.amount = amount;
    this.date = date;
  }
}

// const bank1 = new Bank("SAB");
// const bank2 = new Bank("BSF");
// const bank3 = new Bank("SNB");

// const branch1 = new Branch("Riyadh");
// const branch2 = new Branch("Jeddah");
// const branch3 = new Branch("Khubar");

// const customer1 = new Customer("khalid", 12345);
// const customer2 = new Customer("ahmad", 6789);
// const customer3 = new Customer("bader", 43322);

// const transaction1 = new Transaction(500, "14.01.2024");
// const transaction2 = new Transaction(250, "28.02.2024");
// const transaction3 = new Transaction(-1200, "13.01.2024");
// const transaction4 = new Transaction(350, "28.02.2024");

//console.log(JSON.stringify(bank.getBranches(), null, 2))
