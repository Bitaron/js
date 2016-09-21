'use strict';
var $ = require('jquery');


var LocationData = function() {
    this.name = '';
    this.temp = '';

    this.fetch = function(data) {
       return $.ajax(getAjaxConfig(data)) ;
    };
};

function getAjaxConfig(location) {
    var Uri = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=4095781a1e0464e938b262455a1405de&units=metric';
    var ajaxConfig = {
        url: Uri,
        type: 'GET'
    };
    return ajaxConfig;
}


module.exports = LocationData;

