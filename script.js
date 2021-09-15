var database = [
	{
		email: "test",
		password: "test"
	}
]

// var newsfeed = [
// 	{
// 		userName: "This is cool",
// 	},
// 	{
// 		userName: "This is not cool",
// 	}
// ]

// var userNamePrompt = prompt("What is your userName: ");
// var passwordPromopt = prompt("WHat is your passwrod: ");

function SignIn(user, pass) {	 
	if (user == database[0].email && pass == database[0].password) {
	 var user = document.getElementById("email").value;
	 var pass = document.getElementById("password").value;		
		alert("Wellcome");
	} else{
		alert("your username and password is not correct");
	}
}
SignIn(email, password);