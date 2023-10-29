interface Shape {
	area(): number;
	perimeter(): number;
}

class Circle implements Shape {
	constructor(private radius: number) {}

	area() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	perimeter() {
		return 2 * Math.PI * this.radius;
	}
}

class Rectinagle implements Shape {
	constructor(private width: number, private height: number) {}

	area() {
		return this.width * this.height;
	}

	perimeter() {
		return 2 * (this.width + this.height);
	}
}

function calculateArea(shape: Shape) {
	return shape.area();
}

// client code
let circle = new Circle(5);
let rectangle = new Rectinagle(10, 20);
console.log("Area of circle", calculateArea(circle));
console.log("Area of rectangle", calculateArea(rectangle));
