'use strict';
var moment = require('moment');

var TimeData = function() {

};
TimeData.getDataBasedOnLocal = function(locale) {
    moment().locale(locale);
    return {
        currentTime: moment().format()
    }
};
module.exports = TimeData;

