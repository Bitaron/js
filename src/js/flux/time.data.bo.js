'use strict';

var moment = require('moment-timezone');

var TimeData = function() {

};

TimeData.getDataBasedOnLocal = function(locale) {
    console.log('here 2');
    return {
        currentTime: moment.tz(locale).format()
    };
};



module.exports = TimeData;

