'use strict';

var React = require('react');
var GoogleLocations = require('google-locations');
var config = require('./../config.js');
var $ = require("jquery");
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
    // TODO: implement google place auto complete.
    googlePlaceAutoCompleteInitialize: function() {
        var googleLocations = new GoogleLocations(config.GOOGLE_API_KEY);
        var input = document.getElementById('input');

        googleLocations.autocomplete({input: input, types: '(cities)'}, function(err, response) {
            console.log('autocomplete: ', response.predictions);

            var success = function(err, response) {
                console.log('did you mean: ', response.result.name);
            };

            for (var index in response.predictions) {
                googleLocations.details({placeid: response.predictions[index].place_id}, success);
            }
        });
    },

    componentDidMount: function() {
        LocationStore.addChangeListener(this._onChange);
    },


    componentWillUnmount: function() {
        LocationStore.removeChangeListener(this._onChange);
    },
    showValue : function(){
        LocationStoreAction.loadLocation($('#first').val());
        var state = getAppState();
        console.log(state.name);
    },

    _onChange: function() {
        this.setState(getAppState());
    },

    render: function() {
        var imageSource = 'http://openweathermap.org/img/w/'.concat(this.state.imageIcon).concat('.png');
        return (
            <div className="generalDiv" >
                <div>
                    <input type="text" id="first"/>
                </div>
                <button type="button" onClick={this.showValue}>Add!</button>
                <button type="button" onClick={this.reset}>Reset!</button>
                {
                    this.state.success === false ? null
                        : <div id="box">
                        {this.state.success === false ? null : <p>{this.state.name}</p>}
                        <div>
                            {this.state.temperaturInCelcius === null ? null
                                : <p className="generaltemp temp">{this.state.temperaturInCelcius} <b>C</b></p>
                            }
                            {this.state.imageIcon === null ? null
                                : <img className="generaltemp" src={imageSource}></img>
                            }
                        </div>
                        <p>{this.state.currentTime}</p>
                    </div>
                }
            </div>
        );
    }
});
module.exports = Place;
