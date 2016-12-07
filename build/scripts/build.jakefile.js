(function () {
    'use strict';
    var Paths = require('../util/paths');
    
    var versionChecker = require('../util/version_checker');
    var linter = require('../util/linter');
    var testRunner = require('../util/tests.runner');

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
    }, {async : true});

    //** TEST RUNNER **//
    desc('run tests');
    task('tests', ['unitTests']);

    desc('run unit test suits')
    task('unitTests', function () {
        console.log('Running unit tests ..');
        testRunner.run({
            testDir : Paths.Tests.TestSource
        }, complete, fail);
    }, {async : true});

}());