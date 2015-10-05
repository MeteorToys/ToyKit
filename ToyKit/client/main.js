/*
	
	# Step 3
	  Replace the word SDK with the name of your package.
	  
	  Then, open ./client/main.css

*/

Meteor.startup(function() {
	// If there is no count, set it to 0
	MeteorToys.setDefault("SDK/counter", 0);
});

Template.MeteorToys_SDK_header.events({
	'click .MeteorToys_SDK_header': function () {
		// From ToyKit API
		MeteorToys.closeToy();
		
		// From Package itself
		ToyKit.onClose();
	},
	'click .MeteorToys_SDK_button': function (e,t) {
		// Stop the previous click event from propagating,
		// otherwise clicking the button would close the toy
		e.stopPropagation();
		
		// Increment the count of the counter
		// Notice that Meteor Toys do not use Session
		count = MeteorToys.get("SDK/counter");
		MeteorToys.set("SDK/counter", count + 1);
	}
});

Template.MeteorToys_SDK_content.helpers({
	'count': function () {
		return MeteorToys.get("SDK/counter");
	}
});