//BakcAccoutn class
//Deposit money
//Withdraw money
//Balance - hidden/encapsulated

class BankAccount {
	private _balanece: number;
	constructor(initialBalance: number) {
		this._balanece = initialBalance;
	}

	public deposit(amount: number): void {
		if (amount && amount > 0) {
			this._balanece += amount;
			return;
		}
		console.log("Invalid amount");
	}

	public withdraw(amount: number): void {
		if (amount < 0) {
			console.log("Invalid amount");
			return;
		}

		if (amount > this._balanece) {
			console.log("Insufficient balance");
			return;
		}

		this._balanece -= amount;
	}

	//Getter to get balance of the bank account
	get balance(): number {
		return this._balanece;
	}
}

//Client code
let account = new BankAccount(1000);
account.deposit(100);
account.withdraw(200);
console.log("Balance", account.balance);
