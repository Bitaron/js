var Dispatcher = require('./dispatcher');
var ActionConstants = require('./action.constant');

var ActionCreator = {

    loadLocation: function(data) {
        Dispatcher.handleViewAction({
            actionType: ActionConstants.LOAD_LOCATION,
            data: data
        });
    }
};

module.exports = ActionCreator;
