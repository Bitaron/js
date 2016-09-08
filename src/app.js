'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var constant = require('./constants.js');

var SimpleTest = React.createClass({
    render : function(){
        return(
            <h1>Hello, world! {constant.const}</h1>
        );
    }
});

exports.SimpleTest = SimpleTest;

exports.test = function test(){

    ReactDOM.render(
        <SimpleTest />,
        document.getElementById('test')
    );
};