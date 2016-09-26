'use strict';
var $ = require('jquery');


var LocationData = function() {
    this.name = '';
    this.temp = '';
    this.timezone = '';
    this.latitude = '';
    this.longitude = '';

    this.fetchWeatherData = function(data) {
        return $.ajax(getAjaxConfig(data));
    };

    this.fetchTimezone = function(data) {
        return $.ajax(getTimeAjaxConfig(data));
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

function getTimeAjaxConfig(location) {
    var Uri = 'https://maps.googleapis.com/maps/api/timezone/json?location='+
        location.latitude+','+location.longitude+'&timestamp=1331161200&key=AIzaSyDFf_Hno8usyxkN3PNUorVu_vs8x-k0DM8';
    var ajaxConfig = {
        url: Uri,
        type: 'GET'
    };
    return ajaxConfig;
}


https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=YOUR_API_KEY
module.exports = LocationData;

