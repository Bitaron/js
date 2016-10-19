'use strict';

var Environment = {
    compare : function(first, second) {
        if(first>second) {
            return 1;
        }else if(first<second) {
            return -1;
        }else {
            return 0;
        }
    },
    data : {
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
    }

};

module.exports = Environment;