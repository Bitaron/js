(function () {
    'use strict';
    
    var versionChecker = require('../util/version_checker');

    desc('This is the default task.');
    var startTime = Date.now();
    task('default', ['version'], function () {
        console.log('This is the default task.');
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\n\nBuild ok (" + elapsedSeconds.toFixed(2) + "s)");
    });

    desc('This checks node.js version');
    task('version', function () {
        console.log('check nodejs version');
        versionChecker.check({
            name : 'Node',
            strict : true,
            actual : process.version,
            expected : require("../../package.json").engines.node
        },complete, fail);
    },{async : true});

}());