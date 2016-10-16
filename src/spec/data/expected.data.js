"use strict";

var Immutable = require('immutable');
var RealData = require('./real.data');
module.exports = {
    FLOAT_DATA : Immutable.Map({S:RealData.significand, E:RealData.exponent})
};