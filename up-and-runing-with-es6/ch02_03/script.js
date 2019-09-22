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