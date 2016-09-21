'use strict';

var React = require('react');
var $ = require('jquery');
var LocationStore = require('./location.store');
var ActionCreator = require('./action.creator');
var RestApiStore = require('./rest.api.store');

function getAppState() {
    return LocationStore.getLocation();
}

var Place = React.createClass({

    getInitialState: function() {
        return getAppState();
    },


    componentDidMount: function() {
        LocationStore.addChangeListener(this._onChange);
        RestApiStore.addChangeListener(this.invokeLoadLocationAction);
    },


    componentWillUnmount: function() {
        LocationStore.removeChangeListener(this._onChange);
        RestApiStore.removeChangeListener(this.invokeLoadLocationAction);
    },

    callApi: function() {
        ActionCreator.callWeatherApi($('#first').val());
    },

    _onChange: function() {
        this.setState(getAppState());
    },

    invokeLoadLocationAction: function(){
        ActionCreator.loadLocation(RestApiStore.getWeatherData());
    },


    render: function() {
        return (
            <div className="generalDiv" >
                <div>
                    <input type="text" id="first"/>
                </div>
                <button type="button" onClick={this.callApi}>Add!</button>
                <p>{this.state.name}</p>
                <p>{this.state.temp}</p>

            </div>
        );
    }
});
module.exports = Place;
