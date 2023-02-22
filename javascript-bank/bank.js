/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || balance % 1 !== 0) {
    return null;
  }
  var newAccount = new Account(this.nextAccountNumber, holder);
  newAccount.deposit(balance);
  this.accounts.push(newAccount);
  this.nextAccountNumber++;
  // console.log(newAccount);
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
  // console.log(this.accounts[1].number);
};

Bank.prototype.getTotalAssets = function () {
  // console.log(this.accounts[2].transactions[0].type);
  // console.log(this.accounts);
  if (this.accounts.length === 0) {
    return 0;
  }
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].transactions[0].type === 'deposit') {
      total += this.accounts[i].transactions[0].amount;
    } else {
      total -= this.accounts[i].transactions[0].amount;
    }
  }
  return total;
};
