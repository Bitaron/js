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

SortUtility.quickSort = function(unsortedArray, compareFunction) {
    return partition(unsortedArray,compareFunction,0, unsortedArray.length-1,'main');


};

var partition = function(unsortedArray,compareFunction,startingIndex, endingIndex,half) {
    if(startingIndex >= endingIndex || endingIndex < 0) {
        return unsortedArray;
    }
    var pivot = unsortedArray[startingIndex];
    var leftMarker = startingIndex;
    var rightMarker = endingIndex;
    while( leftMarker < rightMarker) {
        if(compareFunction(unsortedArray[rightMarker], pivot) == 1) {
            rightMarker--;
        }else {
            leftMarker++;
            if (compareFunction(unsortedArray[leftMarker], pivot) == 1) {
                unsortedArray = swap(unsortedArray, leftMarker, rightMarker);
            }
        }
    }
    unsortedArray = swap(unsortedArray,startingIndex,leftMarker);
    partition(unsortedArray,compareFunction,startingIndex, (leftMarker-1),'left');
    partition(unsortedArray,compareFunction,++leftMarker,endingIndex,'right');
    return unsortedArray;
};

var swap = function(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
};

SortUtility.mergeSort = function(unsortedArray, compareFunction) {
    var left = SortUtility.divideAndMerge(unsortedArray.slice(0, unsortedArray.length/2),compareFunction);
    var right = SortUtility.divideAndMerge(unsortedArray.slice(unsortedArray.length/2), compareFunction);

    var sortedArray = SortUtility.merge(left,right);
    return sortedArray;

};

SortUtility.divideAndMerge = function(unsortedArray, compareFunction) {
    if(unsortedArray.length == 1) {
        return unsortedArray;
    }
    var left =
        SortUtility.divideAndMerge(unsortedArray.slice(0, unsortedArray.length/2),compareFunction);
    var right =
        SortUtility.divideAndMerge(unsortedArray.slice(unsortedArray.length/2), compareFunction);

    var sortedArray = SortUtility.merge(left,right);
    return sortedArray;
};

SortUtility.merge = function(first, second) {
    var firstLength = first.length;
    var secondLength = second.length;
    var leftArrayInd = 0;
    var rightArrayInd = 0;
    var newSortedArray = [];
    for(var i= 0; i< (firstLength+secondLength); i++ ) {
        if(rightArrayInd >= secondLength || first[leftArrayInd] <= second[rightArrayInd]) {
            newSortedArray.push(first[leftArrayInd]);
            leftArrayInd++;
        }else if(leftArrayInd >= firstLength || second[rightArrayInd] <= first[leftArrayInd]) {
            newSortedArray.push(second[rightArrayInd]);
            rightArrayInd++;
        }
    }

    return newSortedArray;
};

module.exports = SortUtility;