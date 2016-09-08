(function() {
    'use strict';

    exports.lint = function(options, success, fail) {
        var CLIEngine = require("eslint").CLIEngine;

        var cli = new CLIEngine({
            configFile: options.configFilePath
        });


        var report = cli.executeOnFiles(options.files);
        var formatter = cli.getFormatter();
        console.log(formatter(report.results));
        success();

    };

}());
