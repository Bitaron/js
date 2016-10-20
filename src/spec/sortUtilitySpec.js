"use strict";

var SortEnvironment = require('./data/sort.utility.environment');
var SortUtility = require('../client/sort.utility');

var dataObject = SortEnvironment.data;

describe('SORT UTILITY TESTS ', function() {
    describe('sort utility can use ', function() {
        beforeEach(function() {
            jasmine.addMatchers(customMatchers);
        });
        it('insertion sort', function() {
            matcher(SortUtility.insertionSort);
        });

        it('' +
            'quick sort', function() {
            matcher(SortUtility.quickSort);
        })
    });
});

var customMatchers = {
    toBeEqualSortedArray: function (util) {
        return {
            compare: function(actual, expected){
                var testArray = actual;
                var result = {};
                result.pass = util.equals(actual, dataObject[expected].s);
                if(result.pass) {
                    result.message = expected.toString().toUpperCase() + ': test passed';;
                } else {
                    result.message =  expected.toString().toUpperCase() +
                        ": Expected [" +
                        actual + "] to be equal [" + dataObject[expected].s + ']';
                }
                return result;
            }
        }
    }
};

var matcher = function(sortFunction) {
    var compareFunction = SortEnvironment.compare;
    for(var property in dataObject){
       // console.log('\t' + property.toString());
        var sortedArray = sort(sortFunction,dataObject[property].u, compareFunction);
        match(sortedArray,property);
    }
};

var sort = function(sortFunction, unsortedArray, comparefunction) {
    return sortFunction(unsortedArray,comparefunction);
};

var match = function(testResult,dataProperty) {
    expect(testResult).toBeEqualSortedArray(dataProperty);
};



