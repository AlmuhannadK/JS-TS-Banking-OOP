class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [
      {
        name: "oldBranch",
        customers: [
          {
            name: "khalid",
            id: 123,
            transactions: [
              {
                amount: 500,
                date: "01-02-2024",
              },
              {
                amount: 500,
                date: "02-02-2024",
              },
              {
                amount: 500,
                date: "03-02-2024",
              },
            ],
          },
          {
            name: "ahmed",
            id: 1234,
            transactions: [
              {
                amount: 500,
                date: "01-02-2024",
              },
              {
                amount: 500,
                date: "02-02-2024",
              },
              {
                amount: 500,
                date: "03-02-2024",
              },
            ],
          },
        ],
      },
    ];
  }

  addBranch(newBranch) {
    this.branches.forEach((branch) => {
      if (branch.name === newBranch.name) {
        console.error(`Branch name (${newBranch.name}) already exists`);
      } else {
        this.branches.push(newBranch);
      }
    });
  }

  addCustomer(branch, customer) {
    this.branches.forEach((branchElement) => {
      if (branchElement.name === branch.name) {
        branchElement.customers.forEach((customerElement) => {
          if (customerElement.id === customer.id) {
            console.error(
              `Customer (${customer.name}) already exists in (${branchElement.name})`
            );
          } else {
            branchElement.customers.push(customer);
            console.info(`New customer added successfully! (${customer.name})`);
          }
        });
      }
    });
  }

  addCustomerTransaction(branch, customerId, amount) {
    let balance = 0;
    this.branches.forEach((branchElement) => {
      if (branchElement.name === branch.name) {
        branchElement.customers.forEach((customerElement) => {
          if (customerElement.id === customerId) {
            customerElement.transactions.forEach((transactionsElement) => {
              balance += transactionsElement.amount;
            });
            let newBalance = balance + amount;
            if (newBalance >= 0) {
              customerElement.transactions.push(
                new Transaction(amount, new Date())
              );
              console.log(
                `Successful transaction new balance is (${newBalance})`
              );
            } else {
              console.error(
                `sorry this transactions cannot be completed due to low balance`
              );
            }
          }
        });
      }
    });
  }
}

class Transaction {
  constructor(amount, date) {
    this.amount = amount;
    this.date = date;
  }
}

newBank = new Bank("testBank");

const newBranch = {
  name: "newBranch",
  customers: [
    {
      name: "khalid 123",
      id: 123,
      transactions: [
        {
          amount: 500,
          date: "01-02-2024",
        },
        {
          amount: 500,
          date: "02-02-2024",
        },
        {
          amount: 500,
          date: "03-02-2024",
        },
      ],
    },
  ],
};

const newCustomer = {
  name: "ahmed",
  id: 3123,
  transactions: [
    {
      amount: 500,
      date: "01-02-2024",
    },
    {
      amount: 500,
      date: "02-02-2024",
    },
    {
      amount: 500,
      date: "03-02-2024",
    },
  ],
};

const newTransaction = {
  amount: 500,
  date: "01-02-2024",
};

newBank.addBranch(newBranch);

newBank.addCustomer(newBranch, newCustomer);

newBank.addCustomerTransaction(newBranch, newCustomer.id, -1500);

newBank.branches.forEach((element1) => {
  element1.customers.forEach((element) => {
    console.log(element);
  });
  //   element1.transactions.forEach((element) => {});
});
