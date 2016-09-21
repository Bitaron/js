var Dispatcher = require('./dispatcher');
var ActionConstants = require('./action.constant');

var ActionCreator = {

    loadLocation: function(data) {
        Dispatcher.handleViewAction({
            actionType: ActionConstants.LOAD_LOCATION,
            data: data
        });
    },

    callWeatherApi: function(data) {
        Dispatcher.handleRestApiAction({
            actionType: ActionConstants.CALL_LOCATION_API,
            data: data
        })
    }
};

module.exports = ActionCreator;
