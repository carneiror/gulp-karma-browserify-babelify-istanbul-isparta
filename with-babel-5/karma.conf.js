var istanbul = require('browserify-istanbul');
var isparta = require('isparta');
var babelify = require('babelify');

module.exports = function (config) {
    config.set({

        basePath: process.cwd(),

        autoWatch: true,

        frameworks: ['jasmine', 'browserify'],

        reporters: ['progress', 'coverage'],

        files: [
            'src/**/*.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'tests/**/*.js'
        ],

        preprocessors: {
            'src/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [
                babelify,
                istanbul({
                    instrumenter: isparta,
                    ignore: ['**/node_modules/**', '**/tests/**']
                })
            ]
        },

        'coverageReporter': {
            dir: 'reports',
            reporters: [
                { type: 'html', subdir: 'html'},
                { type: 'cobertura', subdir: '.'}
            ]
        },

        proxies: {},

        exclude: [],

        port: 8080,

        captureTimeout: 20000,

        browsers: [
            'PhantomJS'
        ],

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-browserify'
        ],

        singleRun: true,

        colors: true,

        logLevel: config.LOG_INFO
    });
};
