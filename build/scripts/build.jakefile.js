(function(){
    "use strict";

    var version = require("../util/version_checker.js");

    var startTime = Date.now();
    task("default",["version"],function(){
        var elapsedSeconds = (Date.now() - startTime)/1000;
        console.log("\n\n Build ok ("+ elapsedSeconds.toFixed(2) + "s)");
    });

    task("version",function(){
       console.log("Check node version");
        version.check({
            name: "Node",
            expected: require("../../package.json").engines.node,
            actual: process.version,
            strict: strict
        }, complete, fail);
    }, { async: true });

}());
