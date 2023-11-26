//Interface Segregation Principle

// interface Machine {
// 	print(document: Document): void;
// 	scan(document: Document): void;
// 	fax(document: Document): void;
// }

// class MultiFunctionMacine implements Machine {
// 	print(document: Document): void {
// 		console.log("printing" + document);
// 	}

// 	scan(document: Document): void {
// 		console.log("printing" + document);
// 	}

// 	fax(document: Document): void {
// 		console.log("sending" + document);
// 	}
// }

//Interface above violates isp, since if we want to
//have simplefunctionMachine that has only print function
//we do not have seperate interface for that.
//Refactor above code for isp:

interface Printer {
	print(document: Document): void;
}

interface Scanner {
	scan(document: Document): void;
}

interface Fax {
	fax(document: Document): void;
}

class MultiFunctionMacine implements Printer, Scanner, Fax {
	print(document: Document): void {
		console.log("printing" + document);
	}

	scan(document: Document): void {
		console.log("printing" + document);
	}

	fax(document: Document): void {
		console.log("sending" + document);
	}
}

class SimpleMachine implements Printer {
	print(document: Document): void {
		console.log("printing" + document);
	}
}

//Example two
//creating posts
//commenting posts
//sharing posts
//Admin user
//Regular user
// Admin posts can do all of the above
// Regular posts can only comment and share posts

interface Post {
	title: string;
	content: string;
}

interface Comment {
	title: string;
	content: string;
}

interface PostCreator {
	createPost(post: Post): void;
}

interface CommentCreator {
	createComment(comment: Comment): void;
}

interface PostSharer {
	sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
	createPost(post: Post): void {
		console.log("creating post" + post);
	}

	createComment(comment: Comment): void {
		console.log("creating comment" + comment);
	}

	sharePost(post: Post): void {
		console.log("sharing post" + post);
	}
}

class Regular implements CommentCreator, PostSharer {
	createComment(comment: Comment): void {
		console.log("creating comment" + comment);
	}

	sharePost(post: Post): void {
		console.log("sharing post" + post);
	}
}

// Interface Segregation Principle (ISP) states
// that a class should not be forced to implement
// interfaces it doesn't use. It's about breaking down
// larger interfaces into smaller, more specific ones
// to avoid unnecessary dependencies.

// Here's an example in TypeScript to illustrate ISP:

// Let's say we have an interface called Worker
// that represents various tasks a worker can do:

interface WorkerTest {
	work(): void;
	eat(): void;
	sleep(): void;
	report(): void;
}

// Now, imagine we have two types of workers,
// a Developer and a Manager:

class Developer implements WorkerTest {
	work() {
		// Developer-specific work
	}

	eat() {
		// Developer-specific eating habits
	}

	sleep() {
		// Developer-specific sleeping patterns
	}

	report() {
		// Developer-specific reporting style
	}
}

class Manager implements WorkerTest {
	work() {
		// Manager-specific work
	}

	eat() {
		// Manager-specific eating habits
	}

	sleep() {
		// Manager-specific sleeping patterns
	}

	report() {
		// Manager-specific reporting style
	}
}

// However, imagine a situation where not all
// workers need to report (e.g., contractors or part-time workers).
// In this case, ISP suggests breaking down
// the Worker interface into more specific
// interfaces to avoid forcing classes to implement
// unnecessary methods:
interface Workable {
	work(): void;
}

interface Eatable {
	eat(): void;
}

interface Sleepable {
	sleep(): void;
}

interface Reportable {
	report(): void;
}

class DeveloperTest implements Workable, Eatable, Sleepable, Reportable {
	// Developer class implementation
	// ...
	eat(): void {}
	report(): void {}
	sleep(): void {}
	work(): void {}
}

class ManagerTest implements Workable, Eatable, Sleepable, Reportable {
	// Manager class implementation
	// ...
	eat(): void {}
	report(): void {}
	sleep(): void {}
	work(): void {}
}

class ContractorTest implements Workable, Eatable, Sleepable {
	// Contractor class implementation
	// ...
	eat(): void {}
	sleep(): void {}
	work(): void {}
}
// Now, the classes can implement only the interfaces
// that are relevant to them, adhering to
// the Interface Segregation Principle.
