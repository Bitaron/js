var React = require('react');

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
    googlePlaceAutoCompleteInitialize: function() {
        var options = {
            types: ['(cities)']
        };
        for (var i = 0; i < 5; i++) {
            var input = document.getElementById('input'.concat(this.props.locationId));
            var autocomplete = new google.maps.places.Autocomplete(input, options);
        }
    },
    componentDidMount: function() {
        this.googlePlaceAutoCompleteInitialize();
    },
    showAlert: function() {
        alert(this.state.message);
    },
    render: function() {
        var inputFormId = 'input'.concat(this.props.locationId);
        var imageSource = 'http://openweathermap.org/img/w/'.concat(this.state.imageIcon).concat('.png');
        return (
            <div className="generalDiv">
                <div>
                    <input id={inputFormId} type="text" />
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
