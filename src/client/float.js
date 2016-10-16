'use strict';

var Immutable = require('immutable');

var Float = function(significand,exponent){
    var SIGNIFICAND = 'significand';
    var EXPONENT =  'exponent';

    return new Immutable.Map({S:significand, E:exponent});
};

module.exports = Float;