var Dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionsConstants = require('./action.constant.js');
var assign = require('object-assign');

var _location = {};


function loadLocation(data) {
    _location = data;
}

var LocationStore = assign({}, EventEmitter.prototype, {

    getLocation: function() {
        return _location;
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


Dispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case ActionsConstants.LOAD_LOCATION:
            loadLocation(action.data);
            break;
        default:
            return true;
    }
    LocationStore.emitChange();
    return true;
});

module.exports = LocationStore;
