'use strict';

var Immutable = require('immutable');
var SortUtility = require('./sort.utility');

var Float = function() {

};

Float.SIGNIFICAND = 'S';
Float.EXPONENT = 'E';

Float.BASE = 10;

Float.parse = function(significand,exponent){
    return new Immutable.Map({S:significand, E:exponent});
};

Float.parseNumber = function(decimalNumber) {
    var isExponentMinus = false;
    if(decimalNumber >= 1) {
        isExponentMinus = true;
    }

    var exponent = 0;
    var float;
    var significand = decimalNumber;
    if(isExponentMinus){
        while(1) {
            significand = significand / Float.BASE;
            exponent++;
            if(significand<1){
                significand = significand * Float.BASE;
                exponent--;
                float = Float.parse(significand,exponent);
                return float;
            }
        }
    }else {
        while (1) {
            significand = significand * Float.BASE;
            exponent++;
            if (significand > 1) {
                exponent = -exponent;
                significand = +significand.toFixed(3);
                float = Float.parse(significand,exponent);
                return float;
            }
        }
    }

};

Float.compare = function (first, second) {
    var firstInDecimal = Float.convertToSingleNumber(first);
    var secondInDecimal = Float.convertToSingleNumber(second);
    if(firstInDecimal > secondInDecimal) {
        return 1;
    }else if(firstInDecimal < secondInDecimal) {
        return -1;
    }else{
        return 0;
    }
};

Float.convertToSingleNumber = function(float) {
    var significand = float.get(Float.SIGNIFICAND);
    var exponent = float.get(Float.EXPONENT);
    var expandedExponent = Math.pow(Float.BASE,Math.abs(exponent));
    var singleNumber;
    if(exponent>=0){
        singleNumber = significand * expandedExponent;
    }else{
        singleNumber = significand / expandedExponent;
    }

    return singleNumber;
};

Float.sortByInsertion = function(unsortedArray) {
    var sortedArray = SortUtility.insertionSort(unsortedArray,Float.compare);
    return sortedArray;
};


module.exports = Float;