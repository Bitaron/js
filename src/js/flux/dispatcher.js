var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

AppDispatcher.handleRestApiAction = function(action) {
    this.dispatch({
        source: 'REST_API_ACTION',
        action: action
    });
};
module.exports = AppDispatcher;
