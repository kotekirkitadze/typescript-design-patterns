class User {
	constructor(id, name, email, password) {}
}

class Authentification {
	constructor(private user: User) {}
	authenticate(password: string) {
		//Authenticate
	}
}

// The uses class is not responsible for the authentication
//It has to be seperate class for Authentification
