(function () {
    'use strict';

    var versionChecker = require('../util/version_checker');
    var linter = require('../util/linter');


    desc('run complete cycle');
    var startTime = Date.now();
    task('default', ['version', 'lint', 'tests'], function () {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\n\nBuild ok (" + elapsedSeconds.toFixed(2) + "s)");
    });

    //** NODE VERSION CHECK **//
    desc('checks node.js version');
    task('version', function () {
        console.log('Checking nodejs version ..');
        versionChecker.check({
            name: 'Node',
            strict: true,
            actual: process.version,
            expected: require("../../package.json").engines.node
        }, complete, fail);
    }, {async: true});


    //** LINT **//
    desc('lint complete source');
    task('lint', ['lintBuild', 'lintClient']);


    desc('lint build source');
    task('lintBuild', function () {
        console.log('Linting build ..');
        linter.lint({
            src: 'build'
        }, complete, fail);
    }, {async: true});

    desc('lint client source');
    task('lintClient', function () {
        console.log('Linting client ..');
        linter.lint({
            src: 'client'
        }, complete, fail);
    });

    //** TEST RUNNER **//
    desc('run tests');
    task('tests', ['unitTests']);

    desc('run unit test suits')
    task('unitTests', function () {
        console.log('Running unit tests ..');
        var Mocha = require('mocha'),
                fs = require('fs'),
                path = require('path');

// Instantiate a Mocha instance.
        var mocha = new Mocha();

        var testDir = 'some/dir/test'

// Add each .js file to the mocha instance
        fs.readdirSync(testDir).filter(function (file) {
            // Only keep the .js files
            return file.substr(-3) === '.js';

        }).forEach(function (file) {
            mocha.addFile(
                    path.join(testDir, file)
                    );
        });

// Run the tests.
        mocha.run(function (failures) {
            process.on('exit', function () {
                process.exit(failures);  // exit with non-zero status if there were failures
            });
        });
    })

}());