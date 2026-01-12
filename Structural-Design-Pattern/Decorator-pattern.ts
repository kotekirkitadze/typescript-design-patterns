//#region Explenation
// The Decorator design pattern is a structural design pattern
// that allows you to dynamically add or override behavior in an existing
// object without changing its implementation of an object 
// without affecting other objects of the same class.
//#endregion

//#region Components of the Decorator Pattern
// 1. Component: This is the base interface or abstract class,
//    which defines the methods that will be implemented.
// 2. ConcreteComponent: This is a class which implements the Component interface.
// 3. Decorator: This is also an interface or 
//    an abstract class which implements the Component interface.
// 4. ConcreteDecorator: This is a class which implements the Decorator.
//    It extends the Decorator to decorate the Component.
//#endregion

//#region Code Implementation
// Component Interface
interface Coffee {
    cost(): number;
    description(): string;
}

// ConcreteComponent
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }
    description(): string {
        return "Simple Coffee";
    }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}
    abstract cost(): number;
    abstract description(): string;
}

// ConcreteDecorator - Milk
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }
    cost(): number {
        return this.coffee.cost() + 2;
    }
    description(): string {
        return this.coffee.description() + ", Milk";
    }
}

// Client Code
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(coffee.cost(), coffee.description());

//#endregion


//#region Real World Implementation

interface ServerRequest {
    handle(request:any):void
    // cancel():void - disadvantages #2
}

class BaseServer implements ServerRequest {
    handle(request:any): void {
        console.log("Handling request:", request);
    }
}

abstract class ServerRequestDecorator implements ServerRequest {
    constructor(protected server: ServerRequest) {}
    abstract handle(request:any): void;
}

class LoggingMidleware extends ServerRequestDecorator {
    constructor(server: ServerRequest) {
        super(server);
    } 
    handle(request:any): void {
        console.log("Logging request:", request);
        this.server.handle(request);
    }
}

class AuthMidleware extends ServerRequestDecorator {
    constructor(server: ServerRequest) {
        super(server);
    }
    handle(request:any): void {
        if(request.isAuthenticated) {
            console.log("Request authenticated");
            this.server.handle(request);
        } else {
            console.log("Request not authenticated");
        }
    }
}

// Client Code
const request = { user: "JohnDoe", isAuthenticated: true, action: "login" };
let server: ServerRequest = new BaseServer();
server = new LoggingMidleware(server);
server = new AuthMidleware(server);

server.handle(request);
//#endregion

//#region Advantages
// 1. Flexible alternatives to subclassing:
//    It helps to avoid subclassing for extending functionality.
// 2. You can add or remove functionality at runtime.
// 3. Promotes code reusability.
// 4. Keeps the code clean: Helps to avoid creating subclasses.
// 5. Single Responsibility Principle: 
//    Each decorator has its own responsibility.
//#endregion

//#region Disadvantages
// 1. May have many small objects.
// 2. Requires interface compatibility.
// 3. Ordering of decorators can be complex.
//#endregion

//#region Use cases
// 1. GUI toolkits: where you want to add functionalities to UI components.
// 2. JAVA I/O Classes: Stream processing 
//    where you want to add functionalities like buffering, compression, etc.
// 3. Midleware in web servers.
//#endregion