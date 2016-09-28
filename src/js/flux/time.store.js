'use strict';

var Dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionsConstants = require('./action.constant.js');
var assign = require('object-assign');
var TimeData = require('./time.data.bo');



var TimeStore = assign({}, EventEmitter.prototype, {

    getTime: function() {
        return TimeStore.timeData;
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

TimeStore.timeData = new TimeData();

TimeStore.refreshIntervalId;

TimeStore.internals = {
    init: function(data) {
        TimeStore.timeData = TimeData.getDataBasedOnLocal(data);
        TimeStore.emitChange();
        clearInterval(TimeStore.refreshIntervalId);
        TimeStore.refreshIntervalId = setInterval(function() {
            TimeStore.timeData = TimeData.getDataBasedOnLocal(data);
            TimeStore.emitChange();
        }, 1000);
    }
};

Dispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case ActionsConstants.GET_TIME_BASED_ON_LOCALE:
            TimeStore.internals.init(action.data);
            break;
        default:
            break;
    }
    return true;
});

module.exports = TimeStore;
