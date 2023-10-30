// class BlogPost {
// 	title: string;
// 	content: string;
// 	constructor(title: string, content: string) {}

// 	createPost() {
// 		// Create post
// 	}

// 	updatePost() {
// 		// Update post
// 	}

// 	deletePost() {
// 		// Delete post
// 	}

// 	displayHtml() {
// 		// Publish post
// 		return `<h1>${this.title}</h1><p>${this.content}</p>`;
// 	}
// }

// The BlogPost class is responsible for creating, updating, and deleting posts.
// It is also responsible for displaying the post in HTML.
// This violates the single responsibility principle.
// The BlogPost class should only be responsible for creating, updating, and deleting posts.
//Here is the solution:

class BlogPost {
	title: string;
	content: string;
	constructor(title: string, content: string) {}

	createPost() {
		// Create post
	}

	updatePost() {
		// Update post
	}

	deletePost() {
		// Delete post
	}
}

class DisplayBlogPost {
	constructor(public blogPost: BlogPost) {}

	displayHtml() {
		// Publish post
		return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
	}
}

class BlogPostJson {
	constructor(public blogPost: BlogPost) {}

	returnJson() {
		// Publish post
		return {
			title: this.blogPost.title,
			content: this.blogPost.content,
		};
	}
}
