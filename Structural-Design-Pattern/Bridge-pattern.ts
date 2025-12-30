// Bridge is a structural design pattern that lets you split 
// a large class or a set of closely related classes 
// into two separate hierarchies—abstraction 
// and implementation—which can be developed 
// independently of each other.

// Abstraction is a high-level control layer 
// for some entity. This layer isn’t supposed to do 
// any real work on its own. 
// It should delegate the work to the implementation 
// layer.


interface MediaPlayerImplementation {
    playAudio():void;
    playVideo():void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log("Playing audio using Windows Media Player");
    }
    playVideo(): void {
        console.log("Playing video using Windows Media Player");
    }
}

class MacOSMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log("Playing audio using MacOS Media Player");
    }
    playVideo(): void {
        console.log("Playing video using MacOS Media Player");
    }
}

abstract class MediaPlayerAbstraction {
    constructor(protected implementation: MediaPlayerImplementation) {}

    abstract playFile():void 
}

class AudioPlayer extends MediaPlayerAbstraction {
    public playFile(): void {
        this.implementation.playAudio();
    }
}

class VideoPlayer extends MediaPlayerAbstraction {
    public playFile(): void {
        this.implementation.playVideo();
    }
}


//Client Code
const audioPlayer = new AudioPlayer(new WindowsMediaPlayer());
audioPlayer.playFile(); // Output: Playing audio using Windows Media Player

const videoPlayer = new VideoPlayer(new MacOSMediaPlayer());
videoPlayer.playFile(); // Output: Playing video using MacOS Media Player


//#region Database Bridge Pattern
//#region implementation
interface Database {
    connect():void;
    query(sql:string):void;
    close():void;
}

class PostgresSQlDatabase implements Database {
    public connect(): void {
        console.log("Connecting to PostgreSQL database");
    }
    public query(sql: string): void {
        console.log(`Executing query: ${sql}`);
    }
    public close(): void {
        console.log("Closing PostgreSQL database connection");
    }
}

class MongoDBDatabase implements Database {
    public connect(): void {
        console.log("Connecting to MongoDB database");
    }
    public query(sql: string): void {
        console.log(`Executing query: ${sql}`);
    }
    public close(): void {
        console.log("Closing MongoDB database connection");
    }
}

//#endregion

//#region Abstraction
abstract class DatabaseService {
    constructor(protected database: Database) {}
    abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService {
    public fetchData(query: string): any {
        this.database.connect();
        this.database.query(query);
        this.database.close();
    }   
}

//#endregion

const postgreService = new ClientDatabaseService(new PostgresSQlDatabase());
postgreService.fetchData("SELECT * FROM users");

const MongoDBService = new ClientDatabaseService(new MongoDBDatabase());
MongoDBService.fetchData("{ find: 'users' }");

//#endregion


//#region Advantages
// - Decoupling Abstraction and Implementation: 
//   The Bridge pattern separates the abstraction (high-level control layer) 
//   from its implementation (low-level operations). 
//   This allows both to evolve independently without affecting each other.
//   We can change anything in implementation and abstraction can start using it directly.
// - Improved Maintainability: Since the abstraction and implementation are decoupled, 
//   changes in one do not impact the other. This leads to easier maintenance and updates.
// - Enhanced Flexibility: The Bridge pattern allows for 
//   dynamic switching of implementations at runtime. 
//   This flexibility is particularly useful 
//   when dealing with multiple platforms or varying requirements.
// - Scalability: The Bridge pattern facilitates scalability 
//   by allowing new abstractions and implementations to be added 
//   without modifying existing code. 
//   This is especially beneficial in large systems 
//   where new features may need to be integrated over time. of specific implementations,
//   making it easier to manage and extend the codebase.
// - Improved Maintainability
//   By separating concerns, the adapter pattern enhances code maintainability,
//   as changes in one part of the system have minimal impact on others.
// - Runtime binding
//#endregion

//#region Disadvantages
// - Over-engineering
//   The Bridge pattern can introduce unnecessary complexity 
//   in simple scenarios where a straightforward implementation would suffice.
//   Do not use when we know that code will not be changed.
// - Design Difficulties
//   Implementing the Bridge pattern requires careful planning
//   and design decisions, which can be challenging 
//   for developers unfamiliar with the pattern.
//#endregion