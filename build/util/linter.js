(function() {
    'use strict';
    
    var esLintCLIEngine = require('eslint').CLIEngine;
    var Paths = require('./paths');
    
    exports.lint = function(options, success, fail) {
          var cli = new esLintCLIEngine({
            configFile: Paths.EsLint.Config
        });
       
        var report;
        
        if(options.src === 'build'){
              report = cli.executeOnFiles(Paths.EsLint.BuildSource);
        }else {
              report = cli.executeOnFiles(Paths.EsLint.ClientSource);
        }
       
        var formatter = cli.getFormatter();
        console.log(formatter(report.results));
        
    }
}());