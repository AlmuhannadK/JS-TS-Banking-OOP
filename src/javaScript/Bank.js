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
    console.log(branchesToFind);
    return branchesToFind;
  }

  checkBranch(branch) {
    const branchExists = this.branches.some((branchToFind) => {
      return branchToFind.name === branch.name;
    });
    return branchExists ? true : false;
  }

  listCustomers(branch, includeTransactions) {
    if (this.checkBranch(branch)) {
      const customers = branch.getCustomers();

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
