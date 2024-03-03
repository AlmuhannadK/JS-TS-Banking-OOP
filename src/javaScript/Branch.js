class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  checkCustomer(customerId) {
    const customerExists = this.customers.some((customer) => {
      return customer.id === customerId;
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

  addCustomerTransaction(addToCustomer, amount) {
    if (this.checkCustomer(addToCustomer)) {
      this.getCustomers().forEach((element) => {
        if (element.id === addToCustomer) {
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
