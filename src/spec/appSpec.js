'use strict';


var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var SimpleModule = require('../simpleModule.js');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("works on client code", function() {
        var component = TestUtils.renderIntoDocument(React.createElement(SimpleModule));
        expect(ReactDOM.findDOMNode(component).textContent).toEqual('Hello, world! 2');

    });
});


