"use strict";

var constant = require('./constants.js');
var BigNumber = require('bignumber.js');

exports.test = function test(){
    console.log("\n\n  It is " + constant.const + "\n\n");
    console.log(new BigNumber(constant.const));
    return BigNumber(constant.const);
};