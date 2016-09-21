var Dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionsConstants = require('./action.constant.js');
var assign = require('object-assign');
var ActionCreator = require('./action.creator');
var $ = require('jquery');



var _weatherData = {};

function loadWeatherData(name,temp) {
    _weatherData = {
        name: name,
        temp: temp
    };
}

var RestApiStore = assign({}, EventEmitter.prototype, {

    getWeatherData: function() {
        return _weatherData;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

function getAjaxConfig(location,callBack){
    var Uri = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=4095781a1e0464e938b262455a1405de&units=metric';
    var ajaxConfig = {
        url: Uri,
        type: 'GET',
        success : callBack

    };
    return ajaxConfig;
}

function callWeatherApi(data){
    $.ajax(getAjaxConfig(data,function(response){
        console.log(response);
        loadWeatherData(response.name,response.main.temp);
        RestApiStore.emitChange();

    }));

}



function takeAction(data){
    callWeatherApi(data);
}

Dispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case ActionsConstants.CALL_LOCATION_API:
            console.log(action.data);
            takeAction(action.data);
            break;
        default:
            return true;
    }

    return true;
});

module.exports = RestApiStore;
