'use strict';

var realData = require('./raw.data');

module.exports = {
    WEATHER_API_RESPONSE: {
        name : realData.name,
        main : {
            temp: realData.temp
        }
    }
};

