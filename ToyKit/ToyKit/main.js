/* 

	# Step 5
	  Replace the word SDK with the name of your package.

	  Then, open ./ToyKit/main.css

*/

ToyKit = {
	name:     "SDK",
	template: "MeteorToys_SDK",
	type:     "orb",
	onOpen: function () {
		console.log("You open me");
	},
	onClose: function () {
		console.log("Coffee is for closers!");
	}
};


// Do not modify the code below here

if (Meteor.isClient) {
	if (Package["meteortoys:toykit"]) {
		// If ToyKit is present,
		// Import Meteor Toys API
		MeteorToys = Package["meteortoys:toykit"].MeteorToys;
	} else {
		// Otherwise, warn the user
		MeteorToys = {};
		console.log("For the " + ToyKit.name + " toy to work, you must install Mongol or");
		console.log("the Meteor Toys package. Grab the free edition at http://Meteor.Toys/");
	}
}
