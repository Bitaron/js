'use strict';

var moment = require('moment-timezone');

var TimeData = function() {

};

TimeData.getDataBasedOnLocal = function(locale) {
    return {
        currentTime: moment.tz(locale).format()
    };
};



module.exports = TimeData;

