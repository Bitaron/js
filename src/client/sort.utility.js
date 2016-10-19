'use strict';

var SortUtility = function() {

};

SortUtility.insertionSort = function(unsortedArray, compareFunction) {
    var sortedArray = [];

    for(var i = 0; i<unsortedArray.length; i++) {
        for(var j = i+1; j<unsortedArray.length; j++) {
            var isSmaller = compareFunction(unsortedArray[i],unsortedArray[j]) !== -1;
            if(isSmaller) {
                var temp = unsortedArray[i];
                unsortedArray[i] = unsortedArray[j];
                unsortedArray[j] = temp;
            }
        }
    }
    sortedArray = unsortedArray;
    return sortedArray;
};

module.exports = SortUtility;