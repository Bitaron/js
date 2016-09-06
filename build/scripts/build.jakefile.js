(function(){
    "use strict";

    var version = require("../util/version_checker.js");

    desc("Lint and Test");
    var startTime = Date.now();
    task("default",["version","lint"],function(){
        var elapsedSeconds = (Date.now() - startTime)/1000;
        console.log("\n\n Build ok ("+ elapsedSeconds.toFixed(2) + "s)");
    });




    //**LINT
    
    desc("Lint everyThing");
    task("lint",["lintNode","lintClient"]);

    desc("Lint Node");
    task("lintNode",function(){
        console.log("Linting node ..");
    });

    desc("Lint Client");
    task("lintClient",function(){
        console.log("Linting client ..");
    });





    //** CHECK VERSION

    desc("Check node version");
    task("version",function(){
       console.log("Check node version");
        version.check({
            name: "Node",
            expected: require("../../package.json").engines.node,
            actual: process.version,
            strict: false
        }, complete, fail);
    }, { async: true });

}());
