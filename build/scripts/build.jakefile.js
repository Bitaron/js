(function(){
    "use strict";

    var version = require("../util/version_checker.js");
    var jshint = require("simplebuild-jshint");
    var jshintConfig = require("../config/jshint.config.js");

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
        process.stdout.write("Linting node .");
        jshint.checkFiles(
            {
                files : ["build/**/*.js"],
                options: jshintConfig.nodeOptions,
                globals : jshintConfig.nodeGlobals
            },complete,fail);
    },{async : true});

    desc("Lint Client");
    task("lintClient",function(){
        process.stdout.write("Linting client ..");
        jshint.checkFiles(
            {
                files : ["src/*.js"],
                options : jshintConfig.clientOptions,
                globals : jshintConfig.clientGlobals
            },complete,fail);
    },{async : true});





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
