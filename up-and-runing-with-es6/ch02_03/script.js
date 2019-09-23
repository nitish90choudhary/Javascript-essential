//Default args in funtions

var nameBuilder = function (firstName = "Joe", lastName = "Doe") {
	console.log(firstName + " " + lastName);
};

nameBuilder();

//Template string using backticks ``
//Example 1
function print(firstName) {
	console.log(`Hello ${firstName}`);
}
print("Nitish");

//Example 2
function createEmail(firstName, purchasePrice) {
	var shipping = 5.95;
	console.log(`Hi ${firstName}, Thanks for buying from us!!
	Total: $${purchasePrice}
	Shipping: $${shipping}
	Grand Total: $${purchasePrice +shipping}
	`);
}
createEmail("Nitish", 100);

//Spread operators using three dots ...
console.log("----Spread operators------");

var cats = ["Tabby", "Siamese", "Persian"];
var dogs = ["Golden Retriever", "Pug", "Schnauzer"];

var animals = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"];

console.log(animals);

//Map object that holds key,value pair
//It maintains the insertion order
// get(key)- to retrieve the value
// set(key,value)- to set the value
// keys() - gives list of keys
// values()- gives list of values
// entries() - give k,V pairs.
console.log("----Map object---");

var course = new Map();
course.set('react', {
	description: 'ui'
});
course.set('jest', {
	description: 'test'
});

console.log(course);
console.log(course.get('react'));

var details = new Map([
	[new Date(), 'today'],
	['items', [1, 2]]
]);

console.log(details);

details.forEach(function (item) {
	console.log(item);
});

//Sets datatype- collection of value (unique)
// add() to add values
// has(value)- check value is present in set
// delete(value) - delete value from the set
console.log("----Sets object---");
var books = new Set();
books.add('Pride and Prejudice');
books.add('War and Peace')
	.add('Oliver Twist')
	.add('Pride and Prejudice');

console.log(books);
console.log("Books Size: ", books.size);

// For..of loop is new type of loop introduced with ES6
console.log("---- For..of loop-------");
//babel error
/*var topics = ['Java', 'React', 'Angular', 'JavaScript'];
for (let topic of topics) {
	console.log(topic);
}*/

//#######  ES6 Functions and Objects
console.log('#######  ES6 Functions and Objects');
// 1. Default parameters

function myactivity(name = 'Nitish', activity = 'hiking', time = 3) {
	console.log(`Hi! ${name}, today you are going to ${activity} for ${time} hours`);
}
//Default parameters triggereing
myactivity();

//with arguments
myactivity('Nikhil', 'Running', 1);

//Enhancing object literals
/*
var cat = {
	meow: function (times) {
		console.log(Array(times + 1).join("meow"))

	},
	purr: function (times) {
		console.log(Array(times + 1).join("purr"))
	},
	snore: function (times) {
		console.log(Array(times + 1).join("snore"))
	}
};
*/
//ES6 version of object notationgs

var cat = {
	meow(times) {
		console.log("meow".repeat(times))

	},
	purr(times) {
		console.log("purr".repeat(times))
	},
	snore(times) {
		console.log("snore".repeat(times))
	}
};
cat.meow(3);
cat.purr(4);
cat.snore(5);

//Arrow Functions 
var studentList = students => console.log(students);

studentList(['Joe', 'Cindy', 'Jeane']);

//Arrow functions and this keyword
/*
var person = {
	first: "Doug",
	actions: ["bike", "ski", "surf", "hike"],
	printActions: function () {
		//var _this = this;
		this.actions.forEach(function (action) {
			var str = this.first + " likes to " + action;
			console.log(str);
		}.bind(this));
	}
};
*/ //ES6 Arrow notation function

var person = {
	first: "Doug",
	actions: ["bike", "ski", "surf", "hike"],
	printActions() {
		this.actions.forEach(action => {
			var str = this.first + " likes to " + action;
			console.log(str);
		});
	}
};

person.printActions();

//Destructuring Assignment

var [first, , , fourth] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];
console.log(first);
console.log(fourth);

var {title,price} = {
	title: "Reuben",
	price: 7,
	description: "Cleveland's favourite sandwich",
	ingredients: ['bread', 'corned beef', 'dressing', 'cheese']
};
console.log(title);
console.log(price);

var vacation={
	destination:"Chile",
	travelers:2,
	activity:"skiing",
	cost:4000
};
function vacationMarketing({destination,activity}){
	return `Come to ${destination} and do some ${activity}`;
}
console.log(vacationMarketing(vacation));