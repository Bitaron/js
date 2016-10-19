"use strict";

var SortData = require('./data/sort.utility.data');
var SortUtility = require('../client/sort.utility');

describe('SORT UTITLITY TESTS ', function() {
    describe('sort utility can use ', function() {
        it('insertion sort', function() {
            var sortedArray = SortUtility.insertionSort(SortData.simple.u,SortData.compare);
            expect(sortedArray).toEqual(SortData.simple.s);
        })
    });
});
