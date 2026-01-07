//#region Explanation
// The Composite Pattern is a structural design pattern that lets you compose
// objects into tree structures and then work with these structures
// as if they were individual objects. This pattern is particularly useful
// when dealing with hierarchical data or when you want to treat individual
// objects and compositions of objects uniformly.
//#endregion

//#region Components
// 1. Component: An interface or abstract class that defines the common operations
//    for both leaf and composite objects.
// 2. Leaf: A class that represents individual objects in the composition.  
//    It implements the Component interface and defines behavior for leaf nodes.
// 3. Composite: A class that represents a group of objects (both leaf and composite).
//    It implements the Component interface and defines behavior for managing child components.

//#endregion


//#region Implementation


// Component Interface
interface Employee {
    getName():string;
    getSalary():number;
    getRole():string;
}


//Leaf Class
class Developer implements Employee {
    constructor(private name:string, private salary:number) {}

    getName():string{
        return this.name;
    }
    getSalary():number{
        return this.salary;
    }
    getRole():string{
        return "Developer";
    }
}

//Leaf Class
class Designer implements Employee {
    constructor(private name:string, private salary:number) {}
    getName():string{
        return this.name;
    }
    
    getSalary():number{
        return this.salary;
    } 
    getRole():string{
        return "Designer";
    }
}   


//Composite Class
interface CompositeEmployee extends Employee {
    addEmployee(employee:Employee):void;
    removeEmployee(employee:Employee):void;
    getEmployees():Employee[];
}

class Manager implements CompositeEmployee {
    private employees:Employee[] = [];

    constructor(private name:string, private salary:number) {}
    getName():string{
        return this.name;
    }
    getSalary():number{
        return this.salary;
    }
    getRole():string{
        return "Manager";
    }
    addEmployee(employee:Employee):void{
        this.employees.push(employee);
    }
    removeEmployee(employee:Employee):void{
        const index = this.employees.indexOf(employee);
        if(index !== -1){
            this.employees.splice(index, 1);
        }
    }
    getEmployees():Employee[]{
        return this.employees;
    }
}


let dev1 = new Developer("Alice", 70000);
let dev2 = new Developer("Bob", 80000);
let designer1 = new Designer("Charlie", 60000);

let manager1 = new Manager("David", 100000);
manager1.addEmployee(dev1);
manager1.addEmployee(designer1);
let generalManager = new Manager("Eve", 150000);
generalManager.addEmployee(manager1);
generalManager.addEmployee(dev2);
//#endregion

//#region when to use
// 1. When we want nested objects.
// 2. When we want to treat collections of objects 
//    the same was as you treat individual objects.
//    generalManager.getEmployees()[0].getName()
// 3. When we want to represent part-whole hierarchies of objects.
//#endregion

//#region Real World implementation: File System

// Component Interface
interface FyleSystemComponent{
    getName():string;
    getSize():number;
}


//Leaf
class File1 implements FyleSystemComponent {
    constructor(private name:string, private size:number) {}

    getName():string{
        return this.name;
    }
    getSize():number{
        return this.size;
    }
}

class File2 implements FyleSystemComponent {
    constructor(private name:string, private size:number) {}

    getName():string{
        return this.name;
    }
    getSize():number{
        return this.size;
    }
}

//Composite
interface CompositeFileSystemComponent extends FyleSystemComponent {
    addComponent(component:FyleSystemComponent):void;
    removeComponent(component:FyleSystemComponent):void;
    getComponents():FyleSystemComponent[];
}

class Folder implements CompositeFileSystemComponent {
    private components:FyleSystemComponent[] = [];
    constructor(private name:string ) {}

    getName():string{
        return this.name;
    }
    getSize():number{
        return this.components.reduce((total, component) => total + component.getSize(), 0);
    }

    addComponent(component: FyleSystemComponent): void {
        this.components.push(component);
    }

    removeComponent(component: FyleSystemComponent): void {
        const index = this.components.indexOf(component);
        if(index !== -1){
            this.components.splice(index, 1);
        }
    }
    getComponents(): FyleSystemComponent[] {
        return this.components;
    }
}


let file1 = new File1("file1.txt", 100);
let file2 = new File2("file2.txt", 200);
let folder1 = new Folder("folder1"  );
folder1.addComponent(file1);
folder1.addComponent(file2);
let folder2 = new Folder("folder2" );
folder2.addComponent(folder1);

//#endregion

//#region Advantages
//1. Simplifies Client Code
//2. Makes it easier to add new components:
//   as long as it implements the Component interface.
//3. Easily represents hierarchical structures.
//#endregion


//#region Disadvantages
//1. Violates the Single Responsibility Principle:
//   since composite class has to manage child components:
//   needs to implement component's interface three methods
//   based on the example above and also it needs to implements
//   its own like addComponent, removeComponent, getComponents.
//2. Difficulty in Type Checking.
//3. Diffucylty in restricting components of the composite.
//4. Indirect Coupling:
//   For example, getSize() method in Folder class
//   is indirectly coupled to all child components.
//#endregion

//#region Use Cases
//1. File Systems Representation
//2. Graphical User Interfaces (GUIs)
//3. Organizational Structures
//4. Document Object Models (DOM)
//5. Menu Systems in Applications
//#endregion