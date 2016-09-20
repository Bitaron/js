'use strict';

var React = require('react');
var GoogleLocations = require('google-locations');
var config = require('./config.js');

var Place = React.createClass({

    getInitialState: function() {
        return {
            success: false,
            name: null,
            temperaturInCelcius: null,
            currentTime: null,
            imageIcon: null,
            message: null
        };
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
        this.googlePlaceAutoCompleteInitialize();
    },
    showAlert: function() {
        alert(this.state.message);
    },
    render: function() {
        var imageSource = 'http://openweathermap.org/img/w/'.concat(this.state.imageIcon).concat('.png');
        return (
            <div className="generalDiv">
                <div>
                    <input type="text" />
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
