"use strict";

var SortEnvironment = require('./data/sort.utility.environment');
var SortUtility = require('../client/sort.utility');

describe('SORT UTITLITY TESTS ', function() {
    describe('sort utility can use ', function() {
        it('insertion sort', function() {
            matcher(SortUtility.insertionSort);
        })
    });
});


var matcher = function(sortFunction) {
    var compareFunction = SortEnvironment.compare;
    var dataObject = SortEnvironment.data;
    for(var property in dataObject){
       // console.log('\t' + property.toString());
        var sortedArray = sort(sortFunction,dataObject[property].u, compareFunction);
        match(sortedArray,dataObject[property].s);
    }
};

var sort = function(sortFunction, unsortedArray, comparefunction) {
    return sortFunction(unsortedArray,comparefunction);
}

var match = function(testResult, expectedResult) {
    expect(testResult).toEqual(expectedResult);
}