'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var constant = require('./constants.js');

exports.test = function test(){

    ReactDOM.render(
        <h1>Hello, world! {constant.const}</h1>,
        document.getElementById('test')
    );
};