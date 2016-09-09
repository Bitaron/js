'use strict';

var constatnts = require('../constants.js');


describe('A suite', function() {
    it('contains spec with an expectation', function() {
        expect(true).toBe(true);
    });

    it('works on client code', function() {
        expect(constatnts.const).toEqual(2);
    });
});
