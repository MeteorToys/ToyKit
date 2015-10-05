/* 

  # Step 1:
    In Package.describe(), modify the package name (but not the organization)
    with the name of your package.

    Please note package name must be lowercase in the 
    Package.describe() function.
 
    Then, open ./client/main.html

*/

Package.describe({
  name:          "meteortoys:sdk",
  summary:       "Because you can never have enough toys",
  version:       "1.0.0",
  git:           "https://github.com/MeteorToys/sdk.git",
  documentation: "README.md",
  debugOnly:     true
});

Package.onUse(function(api) {

  var clientFiles = [
    "client/main.html",
    "client/main.js",
    "client/main.css",
  ];

  var mutualFiles = [
    "lib/main.js"
  ];

  var serverFiles = [
    "server/main.js"
  ];

  /***********************************************************************/
  /**  Meteor Toys - ToyKit 2.0.0                                       **/ 
  /**/ api.add_files("ToyKit/main.js",  ["client","server"]);          /**/
  /**/ api.add_files("ToyKit/main.css", ["client"]);                   /**/
  /**/ api.addAssets("ToyKit/main.png", ["client"]);                   /**/
  /**/ api.export('ToyKit',             ["client","server"]);          /**/
  /**  These files should always load first                             **/ 
  /***********************************************************************/ 
  
  api.versionsFrom("METEOR@1.2");
  api.use(["templating","mongo","tracker"], "client");

  api.add_files(clientFiles, ["client"]);
  api.add_files(serverFiles, ["server"]);
  api.add_files(mutualFiles, ["client","server"]);

});