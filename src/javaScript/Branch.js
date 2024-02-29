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
