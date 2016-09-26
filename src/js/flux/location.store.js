var Dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionsConstants = require('./action.constant.js');
var assign = require('object-assign');
var LocationData = require('./location.data.bo');



var LocationStore = assign({}, EventEmitter.prototype, {

    getLocation: function() {
        return LocationStore.locationData;
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

LocationStore.locationData = new LocationData();

LocationStore.internals = {
    init: function(data) {
        return LocationStore.locationData.fetchWeatherData(data).then(function successfulCallback(response) {
            LocationStore.locationData.name = response.name;
            LocationStore.locationData.temp = response.main.temp + 'K';
            LocationStore.locationData.latitude = response.coord.lat;
            LocationStore.locationData.longitude = response.coord.lon;
            LocationStore.internals.getTimeZone(LocationStore.locationData);
        });
    },

    getTimeZone: function(data) {
        return LocationStore.locationData.fetchTimezone(data).then(function successfulCallback(response) {
            LocationStore.locationData.timezone = response.timeZoneId;
            LocationStore.emitChange();
        });
    }
};

Dispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case ActionsConstants.LOAD_LOCATION:
            LocationStore.internals.init(action.data);
            break;
        default:
            return true;
    }
    return true;
});

module.exports = LocationStore;
