'use strict';

var TestUtils = require('react/addons').addons.TestUtils;

describe("It is a spec ",function(){
    it("to test react",function(){
        var component = TestUtils.renderIntoDocument(
            <TopLevelWrapper/>
        );

        var h1 = TestUtils.findRenderedDOMComponentWithTag(
            component, 'h1'
        );

        console.log(h1.getDOMN)
        expect(h1.getDOMNode().textContent)
            .toEqual('Hello, world! 2');
    })
});