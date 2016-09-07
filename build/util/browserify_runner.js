
"use strict";

var fs = require("fs");
var path = require("path");
var browserify = require("browserify");



exports.bundle = function(config, success, failure) {
    browserify(config.options)
        .require(config.entry, { entry: true })
        .bundle()
        .on("error",function(err){return failure(err);})
        .pipe(fs.createWriteStream(config.outfile));
    success();

};