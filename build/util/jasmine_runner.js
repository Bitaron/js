
"use strict";

var Jasmine = require('jasmine');
var JasmineConsoleReporter = require('jasmine-console-reporter');


exports.run = function(config, success, failure) {
    var jasmine = new Jasmine();

    jasmine.loadConfig(config.jasmineVariables);

    jasmine.onComplete(function(passed) {
        if(passed) {
            console.log('All specs have passed\n');
        }
        else {
            console.log('At least one spec has failed');
        }
    });



    var reporter = new JasmineConsoleReporter(config.jasmineReporterVariable);
    jasmine.addReporter(reporter);


    jasmine.execute();
    success();
};

