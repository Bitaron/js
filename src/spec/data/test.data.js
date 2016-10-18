"use strict";

var Immutable = require('immutable');

module.exports = {
    CONSTRUCTOR_DATA : {
        significand : 2,
        exponent : 2,
        base : 10
    },

    OPERATION_DATA : {
        CONVERTION_DATA : {
            FIRST : Immutable.Map({S:1.5,
                E:4}),
            SECOND: Immutable.Map({S:6.667,
                E:-11})
        }
    }

};
