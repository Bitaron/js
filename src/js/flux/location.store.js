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

LocationStore.locationData = {};

LocationStore.internals = {
    init : function(data){
        LocationStore.locationData = new LocationData();
        return LocationStore.locationData.fetch(data).then(function successfulCallback(response){
            LocationData.locationData = new LocationData();
            console.log(response);
            LocationStore.locationData.name = response.name;
            LocationStore.locationData.temp = response.main.temp;
            console.log( LocationStore.locationData);
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
