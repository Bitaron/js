(function(){
    "use strict";

    var shell = require("shelljs");
    var version = require("../util/version_checker.js");
    var jshint = require("simplebuild-jshint");
    var jshintConfig = require("../config/jshint.config.js");
    var paths = require("../config/paths.js");

    desc("Lint and Test");
    var startTime = Date.now();
    task("default",["version","lint","build"],function(){
        var elapsedSeconds = (Date.now() - startTime)/1000;
        console.log("\n\n Build ok ("+ elapsedSeconds.toFixed(2) + "s)");
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



    //**BUILD
    desc("Build");
    task("build",["prepDistDir","buildClient"]);

    task("prepDistDir",function(){
        process.stdout.write("Preparing dis dir .");
        shell.rm("-rf",paths.distDir);

    });

    task("buildClient",function(){
        console.log("Building client .");
    });


}());
