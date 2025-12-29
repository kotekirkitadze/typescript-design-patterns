// Adapter is a structural design pattern that 
// allows objects with incompatible interfaces to collaborate.

// When you travel from the US to Europe for the first time, 
// you may get a surprise when trying to charge your laptop. 
// The power plug and sockets standards are different 
// in different countries. 
// That’s why your US plug won’t fit a German socket. 
// The problem can be solved by using a power plug adapter 
// that has the American-style socket and the European-style plug.


//#When can be used
// - when we have Incompatible interfaces 
// - when we want to use/refactor an legacy code,
// - Alternative to multiple 
//   inheritance(when we do not have multiple inheritance)
// - Asbtracting Volatile classes
//   Encapsulatin classes that are prone to frequent changes,
//   minimizing the impact of these changes 
//   on the rest of the codebase.
//#endregion


class Rectangle {
    constructor(private width: number, private height: number) {}
    area(): number {
        return this.width * this.height;
    }
    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }
}

class Square {
    constructor(private side: number) {}
    area(): number {
        return this.side * this.side;
    }
    getSide(): number {
        return this.side;
    }
}

class SquareToRectangleAdapter  {
    constructor(private square: Square) {}
    getWidth(): number {
        return this.square.getSide(); 
    }
    getHeight(): number {
        return this.square.getSide();
    }
    getArea(): number {
        return this.getWidth() * this.getHeight();
    }
}



//#Real World implementation
class MySQLDatabase {
    public connectToMySQL(url:string):void{
        console.log(`Connecting to MySQL database at ${url}`);
        //implementation details
    }

    public executeMySQLQuery(query:string):void{
        console.log(`Executing MySQL query: ${query}`);
        //implementation details
    }
}

class PostgresSQLDatabase {
    public connectToPostgres(url:string):void{
        console.log(`Connecting to Postgres database at ${url}`);
        //implementation details
    }

    public executePostgresQuery(query:string):void{
        console.log(`Executing Postgres query: ${query}`);
        //implementation details
    }
}

class DataBaseAdapter {
    constructor(private postgreSQL: PostgresSQLDatabase) {}   


    public connectToMySQL(url:string):void{
        this.postgreSQL.connectToPostgres(url);
    }

    public executeMySQLQuery(query:string):void{
        this.postgreSQL.executePostgresQuery(query);
        //implementation details
    }
}



let database = new DataBaseAdapter(new PostgresSQLDatabase());
database.connectToMySQL("mysql://localhost:3306/mydb");
database.executeMySQLQuery("SELECT * FROM users");


//#endregion


//# Advantages
// - Reusability and Flexibility
//   The adapter pattern promotes code reusability by allowing existing classes
//   to work together without modification. 
//   This flexibility enables developers to integrate new components
// - Decoupling and Separation of Concerns
//   The adapter pattern decouples the client code from the specific implementations
//   of the adaptee classes.
// - Enabling Interoperability
//   The adapter pattern enables interoperability between classes
//   with incompatible interfaces, allowing them to work together seamlessly.

//#endregion

//# Disadvantages
// - Hides adaptee complexity
//   The adapter pattern can sometimes hide the complexity of the adaptee class,
//   making it harder to understand its behavior.
// - Tight Coupling
//   The adapter pattern can introduce tight coupling between the adapter
//   and the adaptee classes, making it harder to change or replace the adaptee
//   without affecting the adapter.
// - Potential for confusion
//   The adapter pattern can sometimes lead to confusion,
//   especially if multiple adapters are used for the same adaptee class,
//   making it harder to understand which adapter is being used in a particular context.

//#endregion

//It can be used to interact with and wrap external libraries or APIs,
//Legacy code integration
//Plug-in architectures

// P.S. Sometimes it’s even possible to create 
// a two-way adapter that can convert 
// the calls in both directions.