import { Branch } from "./Branch";
import { Customer } from "./Customer";
import { Bank } from "./Bank";

const arizonaBank = new Bank("Arizona");

const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");

const customer1 = new Customer("John1", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John2", 3);

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransactions(-1000);
// console.log(customer1.getBalance());
// console.log(arizonaBank.listCustomers(westBranch, true));
// console.log(arizonaBank.listCustomers(sunBranch, true));

// console.log(arizonaBank);

<<<<<<< HEAD
console.log(JSON.stringify(arizonaBank.getCustomerByName("John"), null, 2));
=======
// to search by name only make id property = 0
// to search by id only make name property = null
console.log(arizonaBank.searchById(2));
console.log(arizonaBank.searchByName("John"));
arizonaBank.listCustomers(westBranch, true);
>>>>>>> main
