(function(){
    "use strict";

    var shell = require("shelljs");
    var version = require("../util/version_checker.js");

    var jshint = require("simplebuild-jshint");
    var jshintConfig = require("../config/jshint.config.js");

    var paths = require("../config/paths.js");
    var browserify = require("../util/browserify_runner.js");

    var jasmineTestRunner = require("../util/jasmine_runner.js");
    var jasmineConfig = require("../config/jasmine.conf");

    var karma = require("../util/karma_runner.js");

    //**DEFAULT

    desc("Lint and Test");
    var startTime = Date.now();
    task("default",["version","lint","test","build"],function(){
        var elapsedSeconds = (Date.now() - startTime)/1000;
        console.log("\n\nBuild ok ("+ elapsedSeconds.toFixed(2) + "s)");
    });



    //** CHECK VERSION

    desc("Check node version");
    task("version",function(){
        console.log("\n\n\nCheck node version ..");
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



    //**TEST

    desc("Full Test");
    task("test",["simpleTest","crossBrowserTest"]);

    desc("Test on cmd");
    task("simpleTest",function(){
        process.stdout.write("Testing on cmd ..");
        jasmineTestRunner.run(jasmineConfig,complete,fail);
    },{async : true});

    desc("Karma server. Run this first");
    task("karma", function() {
        karma.serve(paths.karmaConfigFile, complete, fail);
    }, { async: true });


    desc("Test using Karma");
    task("crossBrowserTest",["testClient"]);

    task("testClient", function() {
        console.log("Testing browser code: ");
        karma.runTests({
            configFile: paths.karmaConfigFile,
            browsers: [],
            strict: true
        }, complete, fail);
    }, { async: true });



    //**BUILD

    desc("Build");
    task("build",["prepDistDir","buildClient"]);

    task("prepDistDir",function(){
        shell.rm("-rf",paths.distDir);

    });

    task("buildClient",[paths.distDir,"bundleClientJs"],function(){
        console.log("Copying client code ..");
        shell.cp(paths.clientDir + "/*.html", paths.distDir);
    });


    task("bundleClientJs",[paths.distDir],function(){
        console.log("Bundeling client Js with Browserify ..");
        browserify.bundle({
            entry: paths.clientEntryPoint,
            outfile: paths.clientDistBundle,
            options: {
                standalone: "example",
                debug: true
            }
        }, complete, fail);
    }, { async: true });



    //** CREATE DIRECTORIES

    directory(paths.distDir);

}());
