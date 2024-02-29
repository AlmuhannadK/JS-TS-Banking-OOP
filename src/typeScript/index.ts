class Bank {
  private name: string;
  private branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(newBranch: Branch) {
    if (this.checkBranch(newBranch)) {
      console.error(`Branch (${newBranch.getName()}) already exists`);
    } else {
      this.branches.push(newBranch);
      console.info(`New branch (${newBranch.getName()}) added successfully!`);
    }
  }

  addCustomer(branchToAddIn: Branch, customerToAdd: Customer) {
    if (this.checkBranch(branchToAddIn)) {
      branchToAddIn.addCustomer(customerToAdd);
    } else {
      console.error(
        `sorry this branch does not exists this bank (${this.name})`
      );
    }
  }

  addCustomerTransaction(branch: Branch, customerId: number, amount: number) {
    if (this.checkBranch(branch)) {
      branch.addCustomerTransaction(customerId, amount);
    } else {
      console.error(
        `sorry this branch does not exists this bank (${this.name})`
      );
    }
  }

  findBranchByName(branchName: string) {
    const branchesToFind = this.branches.filter((branch) => {
      if (branch.getName().toLowerCase().includes(branchName.toLowerCase())) {
        return branch;
      }
    });
    console.log(branchesToFind);
    return branchesToFind;
  }

  checkBranch(branch: Branch) {
    const branchExists = this.branches.some((branchToFind) => {
      return branchToFind.getName() === branch.getName();
    });
    return branchExists;
  }

  listCustomers(branch: Branch, includeTransactions: boolean) {
    if (this.checkBranch(branch)) {
      const customers: Customer[] = branch.getCustomers();

      customers.forEach((customer) => {
        console.log(customer.getName());
        if (includeTransactions) {
          console.log(customer.getTransactions());
        }
      });

      return customers;
    }
  }
}

class Branch {
  private name: string;
  private customers: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  checkCustomer(customerId: number) {
    const customerExists = this.customers.some((customer) => {
      return customer.getId() === customerId;
    });
    return customerExists;
  }

  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customerToAdd: Customer) {
    if (this.checkCustomer(customerToAdd.getId())) {
      console.error(`Customer (${customerToAdd.getName()}) already exists`);
      return false;
    } else {
      this.customers.push(customerToAdd);
      console.info(
        `New customer (${customerToAdd.getName()}) added successfully! to (${
          this.name
        })`
      );
      return true;
    }
  }
  addCustomerTransaction(customerId: number, amount: number) {
    if (this.checkCustomer(customerId)) {
      this.getCustomers().forEach((element) => {
        if (element.getId() === customerId) {
          element.addTransactions(amount);
          return true;
        }
      });
    } else {
      console.error(
        `sorry this customer does not exists this branch (${this.name})`
      );
      return false;
    }
  }
}

class Customer {
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
class Transaction {
  private amount: number;
  private date: Date;
  constructor(amount: number, date: Date) {
    this.amount = amount;
    this.date = date;
  }
  getDate() {
    return this.date;
  }
  getAmount() {
    return this.amount;
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

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransactions(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));

console.log(arizonaBank);
