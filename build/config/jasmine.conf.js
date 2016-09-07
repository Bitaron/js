(function() {
    "use strict";
    var path = require("./paths.js");
    exports.jasmineVariables = {
        spec_dir: 'src/spec',
        spec_files: [
            "**/*[sS]pec.js"
        ],
        helpers: [
            'helpers/**/*.js'
        ]
    };

    exports.jasmineReporterVariable = {
        colors: 1,           // (0|false)|(1|true)|2
        cleanStack: 1,       // (0|false)|(1|true)|2|3
        verbosity: 4,        // (0|false)|1|2|(3|true)|4
        listStyle: 'indent', // "flat"|"indent"
        activity: false
    };


}());
