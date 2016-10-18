"use strict";

var Float = require('../client/float');
var TestData = require('../spec/data/test.data');
var ExpectedData = require('./data/expected.data');

describe("Create float using ", function() {
    it("separate significand and exponent", function() {
        var float = new Float(TestData.CONSTRUCTOR_DATA.significand,
            TestData.CONSTRUCTOR_DATA.exponent);
        expect(float.equals(ExpectedData.CONSTRUCTOR_DATA)).toBe(true);
    });
});

describe("Float can ",function() {
    it("coverts the map into single number", function() {

    })
});

describe("Insertion short",function() {

});