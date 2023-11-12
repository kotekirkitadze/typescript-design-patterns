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
