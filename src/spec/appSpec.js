'use strict';

var app = require("../app.js");
var constant = require("../constants.js");

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("works on client code", function() {
        expect(app.test()).toBe(2);
    });
});


