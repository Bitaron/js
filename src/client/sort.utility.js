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
    while (heapLength != 0) {
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
                compareFunction(array[startIndx], array[leftChild(startIndx)]) == -1) {
            swapIndex = leftChild(startIndx);
        }

        if (rightChild(startIndx) <= endIndex &&
                compareFunction(array[swapIndex], array[rightChild(startIndx)]) === -1) {
            swapIndex = rightChild(startIndx);
        }

        if (swapIndex != startIndx) {
            array = swap(array, startIndx, swapIndex);
            startIndx = swapIndex;
        } else {
            return array;
        }

    }
    return array;
}

var parent = function (indx) {
    return Math.floor(indx / 2);
}

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
    for (var i = 0; i < unsortedArray.length; i++) {
        sortedArray[(countingArray[unsortedArray[i]] - 1)] = unsortedArray[i];
        countingArray[unsortedArray[i]]--;
    }
    return sortedArray;
}

SortUtility.countElement = function (array) {
    var max = -100000;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    var countArray = new Array(max + 2).join('0').split('').map(parseFloat);
    for (var i = 0; i < array.length; i++) {
        countArray[array[i]]++;
    }

    return countArray;
};

SortUtility.bucketSort = function (unsortedArray, compareFunction) {
    var bucketArray = SortUtility.createBucket(unsortedArray);
    var sortedArray = new Array();
    for (var i = 0; i < bucketArray.length; i++) {
        if (bucketArray[i].length !== 0) {
            bucketArray[i] = SortUtility.insertionSort(bucketArray[i], compareFunction);
        }
    }

    for (var i = 0; i < bucketArray.length; i++) {
        for (var j = 0; j < bucketArray[i].length; j++) {
            sortedArray.push(bucketArray[i][j]);
        }

    }
    return sortedArray;

}

SortUtility.createBucket = function (array) {
    var bucketArray = new Array();
    var maxElement = -999;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }

    for (var i = 0; i <= Math.floor(maxElement); i++) {
        bucketArray[i] = new Array();
    }

    for (var i = 0; i < array.length; i++) {
        var index = Math.floor(array[i] % 10);
        bucketArray[index].push(array[i]);
    }
    return bucketArray;
};






SortUtility.quickSort = function (a, b) {
    // return partition(unsortedArray, compareFunction, 0, unsortedArray.length - 1, 'main');

    var bigger, smaller;

    if (a.length >= b.length) {
        bigger = a;
        smaller = b;
    } else {
        smaller = a;
        bigger = b;
    }

    var mergedString = '';
    for (var i = 0; i < smaller.length; i++) {
        mergedString = mergedString.concat(a[i]);
        mergedString = mergedString.concat(b[i]);
    }

    for (var i = smaller.length; i < bigger.length; i++) {
        mergedString = mergedString.concat(bigger[i]);
    }

    return mergedString;

};

SortUtility.countVote = function (votes) {
    // return partition(unsortedArray, compareFunction, 0, unsortedArray.length - 1, 'main');


    var len = votes.length;
    votes = votes.sort();

    var wN = '';
    var wC = 0;

    var sN = votes[0];
    var sC = 1;

    var ch = 'b';


    console.log(String.fromCharCode(ch.charCodeAt(0) - 1));

    for (var i = 1; i < len; i++) {
        if (sN !== votes[i]) {
            if (sC >= wC) {
                wN = sN;
                wC = sC;
            }
            sN = votes[i];
            sC = 1;
        } else {
            sC++;
        }


    }

    return wN;

};

SortUtility.operate = function (s, operations) {
    // return partition(unsortedArray, compareFunction, 0, unsortedArray.length - 1, 'main');
    var newS = s;
    var i, j, ch;
    var len = operations.length;
    for (var c = 0; c < len; c++) {
        var temp = operations[c].split(' ');
        i = temp[0];
        j = temp[1];
        ch = temp[2];

        if (i < s.length) {
           
            if( j >= s.length){
                j = s.length-1;
            }
            if (ch === 'L') {
                newS = rotateLeft(newS, i, j);
            } else {
                newS = rotateRight(newS, i, j);
            }
      
        }
    }




    return newS;

};


function rotateLeft(newS, i, j) {
    console.log(newS);
    for (var k = i; k <= j; k++) {
        var currentChar = newS.charAt(k);
        var replacedChar;
        if (currentChar === 'a') {
            replacedChar = 'z';
        } else {
            replacedChar = String.fromCharCode(currentChar.charCodeAt(0) - 1);
        }
        newS = newS.replace(currentChar, replacedChar);
    }
    return newS;
}

function rotateRight(newS, i, j) {
    for (var k = i; k <= j; k++) {
        var currentChar = newS.charAt(k);
        var replacedChar;
        if (currentChar === 'z') {
            replacedChar = 'a';
        } else {
            replacedChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
        }
        newS = newS.replace(currentChar, replacedChar);
    }
    return newS;
}
module.exports = SortUtility;