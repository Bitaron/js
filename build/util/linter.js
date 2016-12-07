(function () {
    'use strict';

    var esLintCLIEngine = require('eslint').CLIEngine;


    exports.lint = function (options, success, fail) {
        var cli = new esLintCLIEngine({
            configFile: options.config
        });
        var report = cli.executeOnFiles(options.srcDir);
        var formatter = cli.getFormatter();
        console.log(formatter(report.results));
        return success();
    }
}());