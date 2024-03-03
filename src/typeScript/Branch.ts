import { Customer } from "./Customer";

export class Branch {
  private name: string;
  private customers: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  checkCustomer(customerId: number) {
    const customerExists: boolean = this.customers.some((customer) => {
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
      const targetCustomer: Customer | undefined = this.getCustomers().find(
        (customer) => {
          if (customer.getId() === customerId) {
            customer.addTransactions(amount);
            return true;
          }
        }
      );
    } else {
      console.error(
        `sorry this customer does not exists this branch (${this.name})`
      );
      return false;
    }
  }
}
