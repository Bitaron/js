'use strict';

var Common = {
    BuildSource: 'build/',
    ClientSource: 'src/'
};

module.exports = {

    EsLint: {
        Config: './build/config/eslint.config.js',
        BuildSource: ['./' + Common.BuildSource],
        ClientSource: ['../../' + Common.ClientSource]
    }


};