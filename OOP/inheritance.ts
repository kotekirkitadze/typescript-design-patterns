class Animal {
	constructor(public name: string) {}

	move(distance: number) {
		console.log(`${this.name} moved ${distance}m.`);
	}
}

class Dog extends Animal {
	constructor(public name: string = "dog") {
		super(name);
	}
}

const dog = new Dog();
dog.move(10);

//

class Product {
	constructor(
		public id: string,
		public price: number,
		public description: string,
	) {}
	display(): void {
		console.log(`The product with id ${this.id} costs ${this.price}`);
	}
}

class Book extends Product {
	constructor(
		id: string,
		price: number,
		description: string,
		public title: string,
		public author: string,
	) {
		super(id, price, description);
	}
	display(): void {
		super.display();
		console.log(`The book ${this.title} by ${this.author} is available`);
	}
}

class Electronic extends Product {
	constructor(
		id: string,
		price: number,
		description: string,
		public brand: string,
		public model: string,
	) {
		super(id, price, description);
	}
	display(): void {
		super.display();
		console.log(`The ${this.brand} ${this.model} is available`);
	}
}
