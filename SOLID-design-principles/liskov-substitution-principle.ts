// Liskov Substitution Principle

class BirdTest {
	fly(): void {
		console.log("Bird is flying");
	}
}

class PenguinTest extends BirdTest {
	fly(): void {
		throw new Error("Penguins cannot fly");
	}
}

// This is the Liskov Substitution Principle.
// Because we can not substitute the Penguin class
// for the Bird class without throwing the error.
// LSP says that we should safely invoke method under
//th epenguing class.
//According to LSP, wherever code expects parent class,
// we should be able to safely substitute the child class instance there.

// Refactoring the code to follow LSP

class Bird {
	fly(): void {
		console.log("Bird is flying");
	}
}

class FlightlessBird extends Bird {
	fly(): void {
		console.log("Flightless bird cannot fly");
	}
}

class Penguin extends FlightlessBird {}

const penguin = new Penguin();
penguin.fly();


//Example two

abstract class Shape{
	abstract calculateArea(): number;
}

class Rectangle extends Shape{
	constructor(public width: number, public height: number){
		super();
	}
	calculateArea(): number{
		return this.width * this.height;
	}
}

class Square extends Shape{
	constructor(public side: number){
		super();
	}
	calculateArea(): number{
		return this.side * this.side;
	}
}

//client code

function calculateArea(shape: Shape): number{
	return shape.calculateArea();
}

const rectangle = new Rectangle(10, 20);
const square = new Square(10);
console.log(calculateArea(rectangle));
console.log(calculateArea(square));


//Example three

//Payment Processor
//Credit Card
//Debit Card
//PayPal


abstract class PaymentProcessor{
	abstract processPayment(amount:number): void;
}

class CreditCardProcessor extends PaymentProcessor{
	processPayment(amount: number): void{
		console.log(`Paying through Credit Card: ${amount}`);
	}

}

class PayPal extends PaymentProcessor{
	processPayment(amount: number): void{
		console.log(`Paying through PayPal: ${amount}`);
	}
}


class DebitCardProcessor extends PaymentProcessor{
	processPayment(amount: number): void{
		console.log(`Paying through Debit Card: ${amount}`);
	}
}

//Client code

function executePayment(paymentProcessor: PaymentProcessor, amount: number):void{
	paymentProcessor.processPayment(amount);
}

const creditCardProcessor = new CreditCardProcessor();
const payPal = new PayPal();
const debitCardProcessor = new DebitCardProcessor();
console.log(executePayment(creditCardProcessor, 100));
console.log(executePayment(payPal, 200));
console.log(executePayment(debitCardProcessor, 300));