ToyKit™ - Build Your Own Meteor Toys™
=====================================

Meteor Toys packages are used by (an estimate of) thousands of Meteor developers, with over 100,000 package downloads. Starting today, you can tap into the workflow of these developers with ToyKit. 

With ToyKit, you can forget about writing boilerplate code and then explaining to developers how to use your package. Everything is designed to help you integrate with what they already know.

<img src="http://meteor.toys/sdk.gif">

## ToyKit API

The SDK contains a starter header and content template, which you can fill or replace with whatever you want. Additionally, Meteor Toys provide several utilites to help you be more productive and avoid causing intrusion into the application code.

```javascript
// Use in place of Session variables
MeteorToys.set("packageName/isAwesome", true);
MeteorToys.get("packageName/isAwesome");       // you can bet it won't be false

// UI functionality
MeteorToys.closeToy();                         // closes your toy
MeteorToys.openToy(templateName)               // opens another toy
MeteorToys.colorize(json)	                   // returns colorized JSON

// Toy Configuration (found in package/ToyKit/main.js)
ToyKit = {
	name:     "SDK",
	template: "MeteorToys_SDK",
	type:     "orb",
	onOpen:   function () {
	    console.log("You open me!");
	},
	onClose:  function () {
	    console.log("Coffee is for closers!");
	}
};
```

## How to Get Started

1. Clone the `ToyKit` folder to your `./packages` folder
2. Open `package.js`, and follow the instructions in the comments
3. Add your code, use as you wish, and/or submit to Meteor Toys

## Distribution

For the Toy to work, it must be published under the Meteor Toys organization. I believe this is the best starting point in figuring out a way to give everyone the experience when using the Toys. However, if you choose not to publish the package, it will still work on your local machine. 

By centralizing the distribution, it becomes easier for everyone to discover the packages in one place, rather than have them scattered across Atmosphere. Additionally, if there are breaking changes in Meteor Toys, or a package becomes outdated, I would have to ability to push a patch or note the breaking point.

## Compatibility

For the Toy to work, the developer using it must have Mongol, JetSetter, or Meteor Toys installed. The Toy will alert the user if they are not present. The Toy itself does not depend on any Meteor Toys packages to prevent versioning conflicts.

Since Meteor 1.2 is the future of Meteor, and it introduces breaking changes to the build system, ToyKit is designed to be compatible with Meteor 1.2 and up and Meteor Toys 2.1 and up.

## License

You may distribute your package as closed source or open source, and as free or paid, under any license you wish. In case you do not specify a license, the package will default to the Meteor Toys license. ToyKit, which orchestrates the Toys, is bound by the Meteor Toys license. 

Meteor Toys, the design, look and feel are a copyright of FaverSocial, LLC. 