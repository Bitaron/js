'use strict';

var SortUtility = function () {

};

SortUtility.insertionSort = function (unsortedArray, compareFunction) {
    for (var i = 0; i < unsortedArray.length; i++) {
        for (var j = i + 1; j < unsortedArray.length; j++) {
            var isSmaller = compareFunction(unsortedArray[i], unsortedArray[j]) !== -1;
            if (isSmaller) {
                var temp = unsortedArray[i];
                unsortedArray[i] = unsortedArray[j];
                unsortedArray[j] = temp;
            }
        }
    }
    var sortedArray = unsortedArray;
    return sortedArray;
};



var partition = function (unsortedArray, compareFunction, startingIndex, endingIndex, half) {
    if (startingIndex >= endingIndex || endingIndex < 0) {
        return unsortedArray;
    }
    var pivot = unsortedArray[startingIndex];
    var leftMarker = startingIndex;
    var rightMarker = endingIndex;
    while (leftMarker < rightMarker) {
        if (compareFunction(unsortedArray[rightMarker], pivot) === 1) {
            rightMarker--;
        } else {
            leftMarker++;
            if (compareFunction(unsortedArray[leftMarker], pivot) === 1) {
                unsortedArray = swap(unsortedArray, leftMarker, rightMarker);
            }
        }
    }
    unsortedArray = swap(unsortedArray, startingIndex, leftMarker);
    partition(unsortedArray, compareFunction, startingIndex, (leftMarker - 1), 'left');
    partition(unsortedArray, compareFunction, ++leftMarker, endingIndex, 'right');
    return unsortedArray;
};

var swap = function (array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
};

SortUtility.mergeSort = function (unsortedArray, compareFunction) {
    var left = SortUtility.divideAndMerge(unsortedArray.slice(0, unsortedArray.length / 2), compareFunction);
    var right = SortUtility.divideAndMerge(unsortedArray.slice(unsortedArray.length / 2), compareFunction);

    var sortedArray = SortUtility.merge(left, right);
    return sortedArray;

};

SortUtility.divideAndMerge = function (unsortedArray, compareFunction) {
    if (unsortedArray.length === 1) {
        return unsortedArray;
    }
    var left =
            SortUtility.divideAndMerge(unsortedArray.slice(0, unsortedArray.length / 2), compareFunction);
    var right =
            SortUtility.divideAndMerge(unsortedArray.slice(unsortedArray.length / 2), compareFunction);

    var sortedArray = SortUtility.merge(left, right);
    return sortedArray;
};

SortUtility.merge = function (first, second) {
    var firstLength = first.length;
    var secondLength = second.length;
    var leftArrayInd = 0;
    var rightArrayInd = 0;
    var newSortedArray = [];
    for (var i = 0; i < (firstLength + secondLength); i++) {
        if (rightArrayInd >= secondLength || first[leftArrayInd] <= second[rightArrayInd]) {
            newSortedArray.push(first[leftArrayInd]);
            leftArrayInd++;
        } else if (leftArrayInd >= firstLength || second[rightArrayInd] <= first[leftArrayInd]) {
            newSortedArray.push(second[rightArrayInd]);
            rightArrayInd++;
        }
    }

    return newSortedArray;
};

SortUtility.heapSort = function (unsortedArray, compareFunction) {
    var heapLength = unsortedArray.length - 1;
    var array = unsortedArray;
    while (heapLength !== 0) {
        array = SortUtility.maxHeapify(unsortedArray, 0, heapLength, compareFunction);
        array = swap(array, 0, heapLength);
        heapLength--;
    }

    return array;
};

SortUtility.maxHeapify = function (array, startIndex, endIndex, compareFunction) {
    var indx = Math.floor((endIndex - startIndex) / 2);

    while (indx >= startIndex) {
        array = maintainHeap(array, indx, endIndex, compareFunction);
        indx--;

    }
    return array;
};

var maintainHeap = function (array, startIndx, endIndex, compareFunction) {
    var swapIndex = startIndx;

    while (swapIndex <= endIndex) {
        if (leftChild(startIndx) <= endIndex &&
                compareFunction(array[startIndx], array[leftChild(startIndx)]) === -1) {
            swapIndex = leftChild(startIndx);
        }

        if (rightChild(startIndx) <= endIndex &&
                compareFunction(array[swapIndex], array[rightChild(startIndx)]) === -1) {
            swapIndex = rightChild(startIndx);
        }

        if (swapIndex !== startIndx) {
            array = swap(array, startIndx, swapIndex);
            startIndx = swapIndex;
        } else {
            return array;
        }

    }
    return array;
};

var parent = function (indx) {
    return Math.floor(indx / 2);
};

var leftChild = function (indx) {
    return indx * 2 + 1;
};

var rightChild = function (indx) {
    return indx * 2 + 2;
};


SortUtility.countingSort = function (unsortedArray, compareFunction) {
    var countingArray = SortUtility.countElement(unsortedArray);

    for (var i = 1; i < countingArray.length; i++) {
        countingArray[i] = countingArray[i] + countingArray[i - 1];
    }
    var sortedArray = new Array(unsortedArray.length);
    for (var j = 0; j < unsortedArray.length; j++) {
        sortedArray[(countingArray[unsortedArray[j]] - 1)] = unsortedArray[j];
        countingArray[unsortedArray[j]]--;
    }
    return sortedArray;
};

SortUtility.countElement = function (array) {
    var max = -100000;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    var countArray = new Array(max + 2).join('0').split('').map(parseFloat);
    for (var j = 0; j < array.length; j++) {
        countArray[array[j]]++;
    }

    return countArray;
};

SortUtility.bucketSort = function (unsortedArray, compareFunction) {
    var bucketArray = SortUtility.createBucket(unsortedArray);
    var sortedArray = [];
    for (var i = 0; i < bucketArray.length; i++) {
        if (bucketArray[i].length !== 0) {
            bucketArray[i] = SortUtility.insertionSort(bucketArray[i], compareFunction);
        }
    }

    for (var j = 0; j < bucketArray.length; j++) {
        for (var k = 0; k < bucketArray[j].length; k++) {
            sortedArray.push(bucketArray[j][k]);
        }

    }
    return sortedArray;

};

SortUtility.createBucket = function (array) {
    var bucketArray = [];
    var maxElement = -999;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }

    for (var j = 0; j <= Math.floor(maxElement); j++) {
        bucketArray[j] = [];
    }

    for (var k = 0; k < array.length; k++) {
        var index = Math.floor(array[k] % 10);
        bucketArray[index].push(array[k]);
    }
    return bucketArray;
};

module.exports = SortUtility;