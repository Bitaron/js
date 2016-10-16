"use strict";

var constant = require('./constants.js');
var BigNumber = require('bignumber.js');
var Float = require('./client/float');

exports.test = function test(){
    console.log("\n\n  It is " + constant.const + "\n\n");
    console.log(new BigNumber(constant.const));
    console.log(new Float(1,2).get('SIGNIFICAND'));
    return constant.const;
};