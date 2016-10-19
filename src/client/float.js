'use strict';

var Immutable = require('immutable');

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
    var significand = decimalNumber;
    if(isExponentMinus){
        while(1) {
            significand = significand / Float.BASE;
            exponent++;
            if(significand<1){
                significand = significand * Float.BASE;
                exponent--;
                var float = Float.parse(significand,exponent);
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
                var float = Float.parse(significand,exponent);
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
    var sortedArray = Float.insertionSort(unsortedArray,Float.compare);
    return sortedArray;
};

Float.insertionSort = function(unsortedArray, comparisonFunction) {
    var sortedArray = [];

    for(var i = 0; i<unsortedArray.length; i++) {
        for(var j = i+1; j<unsortedArray.length; j++) {
            var isSmaller = comparisonFunction(unsortedArray[i],unsortedArray[j]) != -1;
            if(isSmaller) {
                var temp = unsortedArray[i];
                unsortedArray[i] = unsortedArray[j];
                unsortedArray[j] = temp;
            }
        }
    }
    sortedArray = unsortedArray;
    return sortedArray;
}

module.exports = Float;