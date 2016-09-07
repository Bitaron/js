"use strict";

var constant = require("./constants.js");

exports.test = function test(){
    console.log("\n\n  It is " + constant.const + "\n\n");
    return constant.const;
};