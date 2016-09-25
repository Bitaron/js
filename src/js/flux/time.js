'use strict';

function getAppState() {
    return TimeStore.getTime();
}

var Time = React.createClass({

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
module.exports = Time;