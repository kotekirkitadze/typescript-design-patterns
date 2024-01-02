abstract class Car {
	constructor(public model: string, public productionYear: number) {}
	abstract displayCarInfo(): void;
}

class SUV extends Car {
	displayCarInfo(): void {
		console.log(
			`This is a SUV. Model: ${this.model}, production year: ${this.productionYear}`,
		);
	}
}

class Hatchback extends Car {
	displayCarInfo(): void {
		console.log(
			`This is a Hatchback. Model: ${this.model}, production year: ${this.productionYear}`,
		);
	}
}

class Sedan extends Car {
	displayCarInfo(): void {
		console.log(
			`This is a Sedan. Model: ${this.model}, production year: ${this.productionYear}`,
		);
	}
}

class CarFactory {
	public createcar(
		type: "sedan" | "suv" | "hatchback",
		model: string,
		productionYear: number,
	): Car {
		switch (type) {
			case "sedan":
				return new Sedan(model, productionYear);
			case "suv":
				return new SUV(model, productionYear);
			case "hatchback":
				return new Hatchback(model, productionYear);
			default:
				throw new Error("Invalid car type");
		}
	}
}

const carFactory = new CarFactory();
const sedan = carFactory.createcar("sedan", "ss", 111);
sedan.displayCarInfo();

//#region Real World implementation

abstract class PaymentProcessor {
	constructor(public amount: number) {}
	abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
	processPayment(): void {
		console.log(`Paypal: ${this.amount}`);
	}
}

class StripeProcessor extends PaymentProcessor {
	processPayment(): void {
		console.log(`Stripe: ${this.amount}`);
	}
}

class BankTransferProcessor extends PaymentProcessor {
	processPayment(): void {
		console.log(`BankTransfer: ${this.amount}`);
	}
}

class PaymentProcessorFactory {
	createPayment(
		paymentType: "Stripe" | "Paypal" | "BankTransfer",
		amount: number,
	) {
		switch (paymentType) {
			case "Paypal":
				return new PaypalProcessor(amount);
			case "BankTransfer":
				return new BankTransferProcessor(amount);
			case "Stripe":
				return new StripeProcessor(amount);
			default:
				throw new Error("no payment");
		}
	}
}

const paymentProcessorFactory = new PaymentProcessorFactory();
const stripe = paymentProcessorFactory.createPayment("Stripe", 10);
stripe.processPayment();
const paypal = paymentProcessorFactory.createPayment("Paypal", 10);
paypal.processPayment();
const bankTransfer = paymentProcessorFactory.createPayment("BankTransfer", 10);
bankTransfer.processPayment();

//#endregion
