var React = require('react');
var constant = require('./constants.js');

var SimpleModule = React.createClass({
    render: function() {
        return (
            <h1>Hello, world! {constant.const}</h1>
        );
    }

});

module.exports = SimpleModule;