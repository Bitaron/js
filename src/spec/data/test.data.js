"use strict";

var Immutable = require('immutable');

module.exports = {
    CONSTRUCTOR_DATA : {
        significand : 2,
        exponent : 2,
        base : 10
    },
    halfSpeedOfLightInFloat: Immutable.Map({S:1.5, E:8}),
    newtonsGravitationalConstantInFloat : Immutable.Map({S:6.667, E:-11}),

    halfSpeedOfLightInDecimal: 150000000,
    newtonsGravitationalConstantInDecimal : 0.00000000006667,

    OPERATION_DATA : {
        CONVERTION_DATA : {
            FIRST : Immutable.Map({S:1.5,
                E:4}),
            FIRST_M : Immutable.Map({S:-1.5,
                E:4}),
            SECOND: Immutable.Map({S:6.667,
                E:-11})
        },

        SORT_DATA :  [
            Immutable.Map({S:6.667, E:-11}),
            Immutable.Map({S:1.5, E:4})
        ]

    }

};
