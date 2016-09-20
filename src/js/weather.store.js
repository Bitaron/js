var Dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;


// Internal object of shoes
var _loacation;

// Method to load shoes from action data
function loadShoes(data) {
    _loacation = data.name;
}

// Merge our store with Node's Event Emitter
var Store = merge(EventEmitter.prototype, {

    // Returns all shoes
    getLocation: function() {
        return _loacation;
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

// Register dispatcher callback
Dispatcher.register(function(payload) {
    var action = payload.action;
    var text;
    Store.emitChange();

    return true;

});

module.exports = Store;