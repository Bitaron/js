'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Place = require('./flux/place.js');


exports.render = function test() {
    ReactDOM.render(
        <Place />,
        document.getElementById('test')
    );
};
