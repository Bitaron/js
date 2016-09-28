'use strict';

var TimeStore = require('../../js/flux/time.store');
var TimeData = require('../../js/flux/time.data.bo');
var RawData = require('../data/raw.data');


describe('Time store ', function() {
    beforeEach(function() {
        spyOn(TimeData, 'getDataBasedOnLocal');
        TimeStore.internals.init(RawData.timezone);
    });
    it('calls time data fetch function with appropriate parameter.', function() {
        clearInterval(TimeStore.refreshIntervalId);
        expect(TimeData.getDataBasedOnLocal).toHaveBeenCalledWith(RawData.timezone);
    });

    it('calls time data fetch function twice in 2 seconds.', function(done) {
        setTimeout(() => {
            clearInterval(TimeStore.refreshIntervalId);
            expect(TimeData.getDataBasedOnLocal).toHaveBeenCalledTimes(2);
            done();
        }, 1000);
    });
});


