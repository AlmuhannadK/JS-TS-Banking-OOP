
class Transaction {
    constructor(amount, date) {
      this.amount = amount;
      this.date = new Date();
    }
  }
class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.transactions = [
        new Transaction(0, new Date()),
        new Transaction(2, new Date()),
        new Transaction(3, new Date()),
        new Transaction(1, new Date()),
    ];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getTransaction(amount, date) {
    return this.amount, this.date;
  }

//   logic should be checked 
// of add transaction
// addTransaction(transaction){
//     if (transaction.amount > 0){
//         this.transactions.push(transaction)
//         return "Transaction is completed"
//     }
    
//     if(transaction.amount > this.getBalance()){
//         return "Non sufficient funds"
//     }
//     else{
//         this.transactions.push(transaction)
//         return "Transaction is completed"
//     }


//     }

  

getBalance() {
    let balance = 0
    this.transactions.forEach((transaction) => {
     
       balance += transaction.amount
     
    });
    if(balance < 0){
        
        console.log("The balance cannot be negative.");
    }
    else  {
        console.log(balance);
    }
  }
}

const newCus = new Customer()

newCus.getBalance()

 const na1 = new Transaction()
na1.getBalance()
