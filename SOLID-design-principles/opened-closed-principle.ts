//Discount for a customer
//regular customer - 10
//premium - 20

class DiscountTest {
	giveDiscount(customer: "premium" | "regular"): number {
		if (customer === "premium") {
			return 20;
		} else if (customer === "regular") {
			return 10;
		} else {
			return 10;
		}
	}
}

//adding new customer
// gold - 30
//If we add new if else for gold customer,
// we are modifying the existing class and
// violating the open closed principle

// Restructure code for open closed principle:
// Now all of these classes are open for extension.
// but closed for modification.
// We can add new classes without modifying the existing code.
// This is the open closed principle.

// aftre adding addLoaltyPoints we did not modify
// the existing code(functionality), but we added new functionality.
// This is the open closed principle.
// The open closed principle does not say not to modify classes,
// but add the new functionality without modifying
// the existing code/not modify existing functionality.

interface Customer {
	giveDiscount(): number;
	// add new fucntionality
	addLoaltyPoints(amountSpent: number): number;
}
class RegularCustomer implements Customer {
	giveDiscount() {
		return 10;
	}

	addLoaltyPoints(amountSpent: number) {
		return amountSpent;
	}
}

class PremiumCustomer implements Customer {
	giveDiscount() {
		return 20;
	}

	addLoaltyPoints(amountSpent: number) {
		return amountSpent * 2;
	}
}

class GoldCustomer implements Customer {
	giveDiscount(): number {
		return 30;
	}

	addLoaltyPoints(amountSpent: number) {
		return amountSpent * 3;
	}
}

class Discount {
	giveDiscount(customer: Customer) {
		return customer.giveDiscount();
	}
}

const gold = new GoldCustomer();
const discount = new Discount();
const finalDiscount = discount.giveDiscount(gold);
console.log(finalDiscount);

// Second example:
interface Shape {
	area(): number;
}

// Rectangle class implementing the Shape interface
class Rectangle implements Shape {
	constructor(public width: number, public height: number) {}

	area(): number {
		return this.width * this.height;
	}
}

// Circle class implementing the Shape interface
class Circle implements Shape {
	constructor(public radius: number) {}

	area(): number {
		return Math.PI * this.radius ** 2;
	}
}

// AreaCalculator class responsible for calculating the total area of shapes
class AreaCalculator {
	// Function to calculate the total area of an array of shapes
	static getTotalArea(shapes: Shape[]): number {
		let totalArea = 0;
		for (const shape of shapes) {
			totalArea += shape.area();
		}
		return totalArea;
	}
}

// Example usage
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

const totalArea = AreaCalculator.getTotalArea([rectangle, circle]);
console.log(`Total area: ${totalArea}`);

// Third example in Angular:
// DataService interface representing a service to fetch data
interface DataService {
	fetchData(): string[];
}

// ApiDataService implementing the DataService interface
class ApiDataService implements DataService {
	fetchData(): string[] {
		// Simulate fetching data from an API
		return ["Data from API"];
	}
}

// Component that displays data from the DataService
class DataComponent {
	constructor(private dataService: DataService) {}

	displayData(): void {
		const data = this.dataService.fetchData();
		console.log(data);
		// Display data in the component
	}
}

// Example usage in an Angular module
// import { NgModule } from "@angular/core";

// @NgModule({
// 	declarations: [DataComponent],
// 	providers: [{ provide: DataService, useClass: ApiDataService }],
// })
// export class AppModule {}
