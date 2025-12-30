//#region Abstract factory pattern

interface IProductA {
	operationA(): string;
}

interface IProductB {
	operationB(): string;
	combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
	createProductA(): IProductA;
	createProductB(): IProductB;
}

class ProductA implements IProductA {
	public operationA(): string {
		return "Product A";
	}
}

class ProductB implements IProductB {
	public operationB(): string {
		return "Product B";
	}

	public combinedOperation(collaborator: IProductA): string {
		return `This is the resul of collaborator - ${collaborator.operationA()}`;
	}
}

class Factory implements IFactory {
	createProductA(): IProductA {
		return new ProductA();
	}

	createProductB(): IProductB {
		return new ProductB();
	}
}
//#endregion
//Client code

const factory = new Factory();
const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));
console.log(productB.operationB());

 