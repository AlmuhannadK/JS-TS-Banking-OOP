class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [
      {
        name: "Ahmad",
        id: 111,
        transactions: [
          {
            amount: 600,
            date: "1.1.2000",
          },
        ],
      },
    ];
  }

  getName() {
    return this.name;
  }

  getCustomer() {
    return this.customers;
  }
  addCustomer(customer) {
    this.customers.forEach((element) => {
      if (customer.id === element.id) {
        console.error("Customer already exists");
      } else {
        this.customers.push(customer);
      }
    });
  }

  addCustomerTransaction(customerId, amount) {
    this.customers.find((customer) => {
      if (customer.id === customerId) {
        let result = customer;
        console.log(customer);
        customer.transactions.push(amount);
      } else {
        console.error("transaction failed");
      }
    });
  }
}
// class Transaction {
//   constructor(amount, date) {
//     this.amount = amount;
//     this.date = date;
//   }
// }

const customer1 = {
  name: "Bader",
  id: 222,
  transactions: [
    {
      amount: 300,
      date: "1.1.2000",
    },
  ],
};
const customer2 = {
  name: "Salem",
  id: 333,
  transactions: [
    {
      amount: 800,
      date: "1.1.2000",
    },
  ],
};

const transactionTest = {
  amount: 200,
  date: "2.2.2001",
};

const branch = new Branch("Riyadh Branch");
branch.addCustomer(customer1);
branch.addCustomer(customer2);
branch.addCustomerTransaction(333, transactionTest);

console.log(branch.getCustomer());
