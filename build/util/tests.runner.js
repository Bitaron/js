(function () {
    'use strict';
    var Mocha = require('mocha');
    var fs = require('fs');
    var path = require('path');
    
    exports.run = function (options, success, fail) {


        var mocha = new Mocha();

        var testDir = options.testDir;

        // Add each .spec.js file to the mocha instance
        fs.readdirSync(testDir).filter(function (file) {
            // Only keep the .spec.js files
            return file.substr(-8) === '.spec.js';

        }).forEach(function (file) {
            mocha.addFile(
                    path.join(testDir, file)
                    );
        });

        mocha.run(function (failures) {
            process.on('exit', function () {
                process.exit(failures);  // exit with non-zero status if there were failures
            });
        });
    }
}());