// The Prototype pattern involves
// creating new objects by copying an existing object,
// known as the prototype. In TypeScript,
// you can implement this pattern
// using either the built-in Object.create() method or
// by defining your own prototype-based approach.

//#region implementation of prototype pattern

interface UserDetails {
	name: string;
	age: number;
	email: string;
}

interface Prototype {
	clone(): Prototype;
	getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
	constructor(private user: UserDetails) {}
	clone(): Prototype {
		const clone = Object.create(this);
		clone.user = { ...this.user };
		return clone;
	}

	public getUserDetails(): UserDetails {
		return this.user;
	}
}

const user1 = new ConcretePrototype({
	name: "John",
	age: 30,
	email: "test@gmail.com",
});

const user2 = user1.clone();
console.log(user1.getUserDetails());
console.log(user2.getUserDetails());

if (user1 === user2) {
	console.log("user1 and user2 are same");
} else {
	console.log("user1 and user2 are not same");
}

//#endregion

//#region From refactoring Guru
// Say you have an object, and you want to create
// an exact copy of it. How would you do it?
// First, you have to create a new object of the same class.
// Then you have to go through
// all the fields of the original object and copy
// their values over to the new object.

// Nice! But there’s a catch. Not all objects
// can be copied that way because some of the object’s
// fields may be private and not visible
// from outside of the object itself.

// Copying an object “from the outside” isn’t always possible.

//#endregion

//#region Real world example

// interface ShapeProperties {
// 	color: string;
// 	x: number;
// 	y: number;
// }

// abstract class Shape {
// 	constructor(public properties: ShapeProperties) {}
// 	abstract clone(): Shape;
// }

// class Rectangle extends Shape {
// 	constructor(
// 		properties: ShapeProperties,
// 		public width: number,
// 		public height: number,
// 	) {
// 		super(properties);
// 	}

// 	clone(): Shape {
// 		let clonedProperties: ShapeProperties = {
// 			color: this.properties.color,
// 			x: this.properties.x,
// 			y: this.properties.y,
// 		};

// 		return new Rectangle(clonedProperties, this.width, this.height);
// 	}
// }

// class Circle extends Shape {
// 	constructor(properties: ShapeProperties, public radius: number) {
// 		super(properties);
// 	}

// 	clone(): Shape {
// 		let clonedProperties: ShapeProperties = {
// 			color: this.properties.color,
// 			x: this.properties.x,
// 			y: this.properties.y,
// 		};

// 		return new Circle(clonedProperties, this.radius);
// 	}
// }

// let redRectangle = new Rectangle(
// 	{
// 		color: "red",
// 		x: 20,
// 		y: 100,
// 	},
// 	10,
// 	20,
// );

// let anotherRectangle = redRectangle.clone();
// anotherRectangle.properties.color = "blue";

// console.log(redRectangle);
// console.log(anotherRectangle);
//#endregion
