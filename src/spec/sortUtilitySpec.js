"use strict";

var SortEnvironment = require('./data/sort.utility.environment');
var SortUtility = require('../client/sort.utility');



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
                        ": Expected to sort [" + dataObject[expected].u + "] but found [" +
                        actual + "] . Ans: [" + dataObject[expected].s + ']';
                }
                return result;
            }
        }
    }
};

var dataObject;

var matcher = function(sortFunction) {
    var environment = new SortEnvironment();
    dataObject = environment.data;
    var compareFunction = environment.compare;
    for(var property in dataObject){
       // console.log('\t' + property.toString());
        var unsortedArray = dataObject[property].u.slice();
        var sortedArray = sort(sortFunction,unsortedArray, compareFunction);
        match(sortedArray,property);
    }
};

var sort = function(sortFunction, unsortedArray, comparefunction) {
    return sortFunction(unsortedArray,comparefunction);
};

var match = function(testResult,dataProperty) {
    expect(testResult).toBeEqualSortedArray(dataProperty);
};



