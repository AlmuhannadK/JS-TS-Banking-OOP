import { error } from "console";
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

  search(obj: { name: string | null; id: number } = { name: null, id: 0 }) {
    console.log(obj.id);

    if (obj.name === null && obj.id === 0) {
      console.log("You have to provide a name or am id to search");
      return false;
    } else if (!obj.id) {
      const customerList: Customer[] = [];
      this.branches.forEach((branch) => {
        customerList.push(...branch.getCustomers());
      });
      const searchResult: Customer[] = customerList.filter(
        (customer: Customer) => {
          if (obj.name) {
            if (customer.getName().includes(obj.name)) {
              return customer;
            }
          }
        }
      );
      return searchResult;
    } else if (obj.name === null) {
      const customerList: Customer[] = [];
      this.branches.forEach((branch) => {
        customerList.push(...branch.getCustomers());
      });
      // console.log(customerList);
      const searchResult: Customer[] = customerList.filter(
        (customer: Customer) => {
          if (customer.getId() === obj.id) {
            return customer;
          }
        }
      );
      return searchResult;
    }
  }
}
