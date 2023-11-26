//#region Example 1

// class MySqlDatabase {
// 	save(data: string): void {}
// }

// class HighLevelModule {
// 	constructor(private database: MySqlDatabase) {}
// 	execute(data: string): void {
// 		this.database.save(data);
// 	}
// }

//Refactor above code:

interface Database {
	save(data: string): void;
}

class MySqlDatabase implements Database {
	save(data: string): void {
		console.log(`saving data to mysql database: ${data}`);
	}
}
class MongoDatabase implements Database {
	save(data: string): void {
		console.log(`saving data to mongo database: ${data}`);
	}
}

class HighLevelModule {
	constructor(private database: Database) {}
	execute(data: string): void {
		this.database.save(data);
	}
}

const mySqlDatabase = new MySqlDatabase();
const mongoDatabase = new MongoDatabase();
const highLevelModule = new HighLevelModule(mySqlDatabase);
highLevelModule.execute("data");
const highLevelModule2 = new HighLevelModule(mongoDatabase);

highLevelModule2.execute("data");
//#endregion
//#region Example 2
// Dependency Inversion Principle (DIP) states that
// high-level modules/classes should not depend on
// low-level modules/classes but rather
// both should depend on abstractions.
// Here's an example in TypeScript:

class Light {
	turnOn() {
		// Code to turn on the light
	}

	turnOff() {
		// Code to turn off the light
	}
}
// Now, we want to create a Switch class that can
// control the light. Without applying DIP,
// the Switch class would directly
// depend on the Light class:
class Switch {
	private light: Light;

	constructor() {
		this.light = new Light(); // Dependency on the Light class
	}

	flipSwitch() {
		// Turn on/off the light
		if (/* some condition */ true) {
			this.light.turnOn();
		} else {
			this.light.turnOff();
		}
	}
}
// However, this violates the Dependency Inversion Principle
// because Switch directly depends on Light. Instead, we'll
// create an abstraction (interface)
// for the Light functionality:

interface Switchable {
	turnOn(): void;
	turnOff(): void;
}

class LightTests implements Switchable {
	turnOn() {
		// Code to turn on the light
	}

	turnOff() {
		// Code to turn off the light
	}
}

// Now, modify the Switch class to depend on
// the abstraction (Switchable) rather than
// the concrete Light class:

class SwitchTest {
	private switchable: Switchable;

	constructor(switchable: Switchable) {
		this.switchable = switchable; // Dependency on abstraction (Switchable)
	}

	flipSwitch() {
		// Turn on/off the switchable device
		if (/* some condition */ true) {
			this.switchable.turnOn();
		} else {
			this.switchable.turnOff();
		}
	}
}
// This change allows Switch to work with any class
// that implements the Switchable interface.
// For instance, you can create other classes
// that implement Switchable (not just Light) and
// use them with the Switch class without modifying its code.

// This way, the Switch class doesn’t directly depend on
// the concrete Light class but relies on
// an abstraction (Switchable), adhering to
// the Dependency Inversion Principle.

//#endregion
//#region Example 3
// In Angular, dependency injection is
// a powerful tool that inherently supports
// the Dependency Inversion Principle (DIP).
// Here's an example in an Angular context:

// Let's say we have a service that
// fetches data from an API:

// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";

// @Injectable()
export class DataService {
	// constructor(private http: HttpClient) {}
	// fetchData(): Observable<any> {
	// 	return this.http.get("https://api.example.com/data");
	// }
}

// Now, imagine a component that uses this DataService:

// import { Component, OnInit } from "@angular/core";
// import { DataService } from "./data.service";

// @Component({
// 	selector: "app-data",
// 	template: `
// 		<div *ngIf="data">
// 			<!-- Display data -->
// 		</div>
// 	`,
// })
export class DataComponent {
	data: any;

	constructor(private dataService: DataService) {}

	ngOnInit() {
		// this.dataService.fetchData().subscribe((result) => {
		// 	this.data = result;
		// });
	}
}

// Here, the DataComponent directly depends
// on the DataService. However, Angular's
// dependency injection mechanism
// allows us to inject dependencies via constructor arguments.
// We can introduce an abstraction/interface
// to adhere to DIP:

// export interface DataServiceInterface {
// 	fetchData(): Observable<any>;
// }

// @Injectable()
// export class DataService implements DataServiceInterface {
// 	constructor(private http: HttpClient) {}

// 	fetchData(): Observable<any> {
// 		return this.http.get("https://api.example.com/data");
// 	}
// }

// Now, let's modify the DataComponent to depend on
// the interface instead of the concrete service:
// import { Component, OnInit } from "@angular/core";
// import { DataServiceInterface } from "./data.service";

// @Component({
// 	selector: "app-data",
// 	template: `
// 		<div *ngIf="data">
// 			<!-- Display data -->
// 		</div>
// 	`,
// })
// export class DataComponent implements OnInit {
// 	data: any;

// 	constructor(private dataService: DataServiceInterface) {}

// 	ngOnInit() {
// 		this.dataService.fetchData().subscribe((result) => {
// 			this.data = result;
// 		});
// 	}
// }

// In your module or component where you provide dependencies,
// you'd use Angular's dependency injection to provide
// the concrete implementation:
// import { NgModule } from "@angular/core";
// import { HttpClientModule } from "@angular/common/http";
// import { DataService, DataServiceInterface } from "./data.service";
// import { DataComponent } from "./data.component";

// @NgModule({
// 	declarations: [DataComponent],
// 	imports: [HttpClientModule],
// 	providers: [
// 		{ provide: DataServiceInterface, useClass: DataService },
// 		// Other providers...
// 	],
// })
// export class DataModule {}
// Now, the DataComponent is decoupled from the
// concrete implementation of DataService and
// depends on the DataServiceInterface,
// adhering to the Dependency Inversion Principle.
// Angular's DI mechanism resolves and injects
// the correct service implementing the interface at runtime
//#endregion
