class Branch {
  private name: string;
  private customers: Customer[];
  constructor(name:string) {
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
    } else {
      this.customers.push(customerToAdd);
      console.info(
        `New customer (${customerToAdd.getName()}) added successfully! to (${
          this.name
        })`
      );
    }
  }
  addCustomerTransaction(customerId: number, amount: number) {
    if (this.checkCustomer(customerId)) {
      this.getCustomers().forEach((element) => {
        if (element.getId() === customerId) {
          element.addTransactions(amount);
        }
      });
    } else {
      console.error(
        `sorry this customer does not exists this branch (${this.name})`
      );
    }
  }
}
