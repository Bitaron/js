'use strict';

var Data = {
    compare : function(first, second) {
        if(first>second) {
            return 1;
        }else if(first<second) {
            return -1;
        }else {
            return 0;
        }
    },
    simple : {
        u : [2,1,4,3,6,5],
        s : [1,2,3,4,5,6]
    }
};

module.exports = Data;