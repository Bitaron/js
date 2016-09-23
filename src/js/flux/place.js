'use strict';

var React = require('react');
var $ = require('jquery');
var LocationStore = require('./location.store');
var ActionCreator = require('./action.creator');


function getAppState() {
    return LocationStore.getLocation();
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

    loadLocation: function() {
        ActionCreator.loadLocation($('#first').val());
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
                <button type="button" onClick={this.loadLocation}>Add!</button>
                <p>{this.state.name}</p>
                <p>{this.state.temp}</p>

            </div>
        );
    }
});
module.exports = Place;
