class Grinder {
    grindBeands():void{
        console.log("Grinding beans");
    }
}

class Boiler {
    boilWater():void{
        console.log("Boiling water");
    }
}


class Brewer{
    brewCoffee():void{
        console.log("Brewing coffee");
    }
}


class CoffeMakerFacade {

    constructor(private grinder: Grinder, private boiler: Boiler, private brewer: Brewer) {}

    makeCoffee():void{
        this.grinder.grindBeands();
        this.boiler.boilWater();
        this.brewer.brewCoffee();
    }
}


const coffeeMaker = new CoffeMakerFacade(new Grinder(), new Boiler(), new Brewer()      );
coffeeMaker.makeCoffee();

//#region when to use
// 1. Ramptant dependencies: 
//    Hight coupling and complex interactions between classes or subsystems.
// 2. Oververwhelming interface:
//    When a class or subsystem has a complex 
//    interface that is difficult to understand or use.
// 3. Overexposure of Inner Workings
//    When you want to hide the inner workings of a complex system
//    and provide a simplified interface for clients to interact with.
// 4. Need for a Layered Architecture
//    Requirement for multi-layered or tiered architectual structures.
//#endregion


//#region advantages
// 1. Simplified Interface:
//    Provides a simple and easy-to-use interface for complex systems.
// 2. Reduced Dependencies.
// 3. Decoupling Clients from Subsystems
// 4. Easier to use
//#endregion

//#region disadvantages
// 1. Over-abstraction:
//    Can lead to over-abstraction, hiding important details.
// 2. Limited Functionality Access.
// 3. Hidding useful Features
//#endregion