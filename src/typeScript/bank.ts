import { Branch } from "./Branch";
import { Customer } from "./Customer";

export class Bank {
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
