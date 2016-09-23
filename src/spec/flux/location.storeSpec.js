'use strict';

var LocationStore = require('../../js/flux/location.store');

var realData = require('../data/raw.data');
var testData = require('../data/test.data');


describe('Location store', function() {
    beforeEach(function() {
        LocationStore.locationData.fetch = function () {
            return new Promise(function (resolve) {
                resolve(testData.WEATHER_API_RESPONSE);
            });
        };
    });
    it('Store creates valid locationData', function(done) {
        LocationStore.internals.init();
        setTimeout(() => {
            expect(LocationStore.locationData.name).toEqual(realData.name);
            expect(LocationStore.locationData.temp).toEqual(realData.temp);
            done();
        }, 0);
    });
});

