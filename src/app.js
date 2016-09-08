'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var SimpleModule = require('./simpleModule.js');


exports.test = function test(){

    ReactDOM.render(
        <SimpleModule />,
        document.getElementById('test')
    );
};

