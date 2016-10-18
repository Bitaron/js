"use strict";

var Immutable = require('immutable');
var TestData = require('./test.data');
module.exports = {
    CONSTRUCTOR_DATA : Immutable.Map({S:TestData.CONSTRUCTOR_DATA.significand,
        E:TestData.CONSTRUCTOR_DATA.exponent}),
    OPERATION_DATA : {
        CONVERSITION_DATA : {
            FIRST : 15000,
            SECOND: 0.00000000006667
        }
    }
};