'use strict';

var LocationStore = require('../../js/flux/location.store');
var LocationData = require('../../js/flux/location.data.bo');


describe('Location store', function() {
    var originalLocationData = new LocationData();
    originalLocationData.name = 'london';
    originalLocationData.temp = 23;
    originalLocationData.fetch = function () {
        return new Promise(function (resolve) {
            resolve(weatherApiData);
        });
    };


    beforeEach(function() {

        var weatherApiData = {};
        weatherApiData.name = 'london';
        weatherApiData.main = {};
        weatherApiData.main.temp = 23;


        LocationStore.locationData.fetch = function () {
            return new Promise(function (resolve) {
                resolve(weatherApiData);
            });
        }

    });
    it('Store creates valid locationData', function(done) {
        LocationStore.internals.init();
        setTimeout(() => {
            console.log( LocationStore.locationData);
            expect(LocationStore.locationData.name).toEqual(originalLocationData.name);
            expect(LocationStore.locationData.temp).toEqual(originalLocationData.temp);
            done()
        }, 0);
    });
});

