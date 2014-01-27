module.exports = function (config) {
    config.set({
        basePath: '../../',

        files: [
            'vendor/**/angular.js',
            'vendor/**/angular-*.js',
            'src/app/**/*.js',
			'src/common/**/*.js',
            'test/unit/**/*Spec.js'
        ],

        exclude: [
            'src/app/**/angular-loader.js',
            'vendor/**/*.min.js',
            'vendor/**/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],
        //browsers: ['PhantomJS','Firefox', 'IE'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-script-launcher',
            'karma-jasmine'
        ]
    });
};
