var Dispatcher = require('./dispatcher');
var ActionConstants = require('./action.constant');

var LocationStoreAction = {

    loadLocation: function(data) {
        Dispatcher.handleViewAction({
            actionType: ActionConstants.LOAD_LOCATION,
            data: data
        });
    }

};

module.exports = LocationStoreAction;
