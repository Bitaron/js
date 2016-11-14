'use strict';

var Environment = function() {
    this.compare = function(first, second) {
        if(first>second) {
            return 1;
        }else if(first<second) {
            return -1;
        }else {
            return 0;
        }
    };

    this.data = {
        simple : {
            u : [2,1,4,3,6,5],
            s : [1,2,3,4,5,6]
        },
        reverse : {
            u : [6,5,4,3,2,1],
            s : [1,2,3,4,5,6]
        },
        negative : {
            u : [1,-3,3,2,0,-1,-2],
            s : [-3,-2,-1,0,1,2,3]
        }
    };

    this.mergeData = {
        simple : {
            a : [2, 4, 6],
            b : [1, 3, 5],
            c : [1, 2, 3, 4, 5, 6]
        },

        second : {
            a : [1],
            b : [2, 3, 3, 4, 22],
            c : [1, 2, 3, 3, 4, 22]
        },

        third : {
            a : [],
            b : [-1, 0, 2000, 333333],
            c : [-1, 0, 2000, 333333]
        },

        fourth : {
            a : [1],
            b : [2],
            c : [1, 2]
        }
    };

    this.heapData = {
        simple: {
            a: [4, 1, 3, 2, 16, 9, 10, 14, 8, 7],
            b: [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
        }
    };

    this.countingData = {
        simple: {
            a: [0,1,5,2,0,1],
            b: [2,2,1,0,0,1]
        }
    };

    this.bucketData = {
        simple: {
            a: [1.2, 1.9, 2, 2.4, 3, 3.5, 4, 4.5, 4.9],
            b: [[], [1.2, 1.9], [2, 2.4], [3, 3.5], [4, 4.5, 4.9]]
        }
    }
};

module.exports = Environment;