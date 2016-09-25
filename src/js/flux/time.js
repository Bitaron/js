'use strict';

var React = require('react');
var TimeStore = require('./time.store');
var LocationStore = require('./location.store');
var ActionCreator = require('./action.creator');

function getAppState() {
    return TimeStore.getTime();
}

var Time = React.createClass({

    getInitialState: function() {
        return getAppState();
    },


    componentDidMount: function() {
        TimeStore.addChangeListener(this._onChange);
        LocationStore.addChangeListener(this._loadTimeBasedOnLocal);
    },


    componentWillUnmount: function() {
        TimeStore.removeChangeListener(this._onChange);
        LocationStore.removeChangeListener(this._loadTimeBasedOnLocal);
    },

    _loadTimeBasedOnLocal: function() {
        console.log('In time react');
        //setInterval( function(){ActionCreator.getTimeBasedOnLocale('en')}, 1000);
        ActionCreator.getTimeBasedOnLocale('America/Los_Angeles');
    },

    _onChange: function() {
        this.setState(getAppState());
    },



    render: function() {
        return (
            <div className="timeDiv" >
                <p>{this.state.currentTime}</p>
            </div>
        );
    }
});
module.exports = Time;