var Dispatcher = require('./dispatcher');
var ActionConstants = require('./action.constant');

var ActionCreator = {

    loadLocation: function(data) {
        Dispatcher.handleViewAction({
            actionType: ActionConstants.LOAD_LOCATION,
            data: data
        });
    },

    getTimeBasedOnLocale: function(data) {
        Dispatcher.handleViewAction({
            actionType: ActionConstants.GET_TIME_BASED_ON_LOCALE,
            data: data
        });
    }
};

module.exports = ActionCreator;
