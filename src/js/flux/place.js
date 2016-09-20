'use strict';

var React = require('react');
var $ = require('jquery');
var LocationStore = require('./location.store');
var LocationStoreAction = require('./location.action.creator');

function getAppState() {
    return {
        name: LocationStore.getLocation()
    };
}

var Place = React.createClass({

    getInitialState: function() {
        return getAppState();
    },


    componentDidMount: function() {
        LocationStore.addChangeListener(this._onChange);
    },


    componentWillUnmount: function() {
        LocationStore.removeChangeListener(this._onChange);
    },

    showValue: function() {
        LocationStoreAction.loadLocation($('#first').val());
    },

    _onChange: function() {
        this.setState(getAppState());
    },

    render: function() {
        return (
            <div className="generalDiv" >
                <div>
                    <input type="text" id="first"/>
                </div>
                <button type="button" onClick={this.showValue}>Add!</button>
                <p>{this.state.name}</p>
            </div>
        );
    }
});
module.exports = Place;
