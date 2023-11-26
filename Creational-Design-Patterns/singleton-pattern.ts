//The Singleton pattern ensures that
//a class has only one instance and provides
//a global point of access to that instance.

//#region implementation of singletone patter
class Singletone {
	private static instance: Singletone;
	private static _value: number;
	private constructor() {}

	public static getInstance(): Singletone {
		if (!Singletone.instance) {
			Singletone.instance = new Singletone();
		}
		return Singletone.instance;
	}

	set value(value: number) {
		Singletone._value = value;
	}

	get value(): number {
		return Singletone._value;
	}
}

let instance1 = Singletone.getInstance();
let instance2 = Singletone.getInstance();
instance1.value = 10;
console.log(instance1.value);
console.log(instance2.value);

console.log(instance1 === instance2);

//#endregion

//#region Real world example
//Singletone Logger Class
//log method
//Can have multiple methods

class Logger {
	private static instance: Logger;
	private constructor() {}

	public static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}
		return Logger.instance;
	}

	public log(message: string) {
		console.log(`[${new Date().toLocaleString()}]: ${message}`);
	}
}

const logger1 = Logger.getInstance();
logger1.log("message from logger one");

const logger2 = Logger.getInstance();
logger2.log("message from logger two");

//#endregion

//#region Caveats of Singleton Pattern

//Increased coupling

class Application {
	constructor(private logger: Logger) {}

	run(): void {
		this.logger.log("starting the application");
		this.logger.log("finishing the application");
	}
}

const application = new Application(Logger.getInstance());
application.run();
//Here to create Application class instance,
//we need to pass Logger class instance
//which means Application class is tightly
//coupled with Logger class.
//There are structural design patterns
//that solve this problem.

//#endregion
