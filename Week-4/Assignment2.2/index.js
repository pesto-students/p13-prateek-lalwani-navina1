//Section 3 – Abstraction and encpasulation:

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    (this.#accountNumber = accountNumber),
      (this.#balance = balance),
      (this.#accountHolderName = accountHolderName);
  }
  getBalance() {
    return `Account balance is ${this.#balance}`;
  }
  addBalance(amount) {
    this.#balance = this.#balance + amount;
  }
  deleteBalance(amount) {
    this.#balance = this.#balance - amount;
  }
}
class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  deposit(amount) {
    this.addBalance(amount);
    return "Amount deposited successfully";
  }
  withdraw(amount) {
    this.deleteBalance(amount);
    return "Amount withdrawed successfully";
  }
}
// const checkingAccount1 = new CheckingAccount(102,1000,"navina");
// console.log(checkingAccount1.getBalance())
// console.log(checkingAccount1.deposit(400))
// console.log(checkingAccount1.getBalance())
// console.log(checkingAccount1.withdraw(200))
// console.log(checkingAccount1.getBalance())

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  deposit(amount) {
    this.addBalance(amount);
    return "Amount deposited successfully";
  }
  withdraw(amount) {
    if (amount > this.getBalance()) {
      return "Insuffient fund";
    } else {
      this.deleteBalance(amount);
      return "Amount withdrawed successfully";
    }
  }
}
const savingsAccount1 = new SavingsAccount(301, 2000, "Anu");
// console.log(savingsAccount1.getBalance());
// console.log(savingsAccount1.deposit(200));
// console.log(savingsAccount1.getBalance());
console.log(savingsAccount1.withdraw(200))
console.log(savingsAccount1.getBalance());
