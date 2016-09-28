'use strict';

var realData = require('./raw.data');

module.exports = {
    WEATHER_API_RESPONSE: {
        cod: 200,
        coord: {
            lat: 23,
            lon: 90
        },
        name: realData.name,
        main: {
            temp: realData.temp
        }
    },

    TIME_ZOME_API_RESPONSE: {
        timeZoneId: realData.timezone
    }
};

