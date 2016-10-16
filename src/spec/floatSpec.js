"use strict";

var Float = require('../client/float');
var RealData = require('../spec/data/real.data');
var ExpectedData = require('./data/expected.data');

describe("Create float using ", function() {
    it("separate significand and exponent", function() {
        var float = new Float(RealData.significand,RealData.exponent);
        expect(float.equals(ExpectedData.FLOAT_DATA)).toBe(true);
    });
});


