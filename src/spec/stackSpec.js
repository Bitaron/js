'use strict';

var SortUtility = require('../client/sort.utility');
/*
describe('Stack, ', function() {
    it('creates a stack with default values ', function() {
        var stack = new Stack(1,3,5,5);
        var match = stack.toEqual(new Stack(1,3,5,5));
        expect(match).toEqual(true);
    });
});

*/

describe('Newscreed , ', function() {
    it('merge string ', function() {
        var expected = 'azbscdde';
        var output = SortUtility.quickSort('abcde', 'zsd');
        expect(expected).toEqual(output);
    });
    
    it('count votes ', function() {
        var expected = 'Michael';
        var votes = 
                ['Alex','Michael', 'Harry', 'Dave', 'Michael', 
            'Victor', 'harry', 'Alex', 'Mary', 'Mary'];
        var output = SortUtility.countVote(votes);
        expect(expected).toEqual(output);
    });
    
    it('operate on String ', function() {
        var expected = 'z';
        var s = 'a';
        var operations = ['1 2 R', '0 3 L', '4 4 R']
        var output = SortUtility.operate(s, operations);
        expect(expected).toEqual(output);
    });
});
