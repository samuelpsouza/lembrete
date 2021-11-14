module.exports = function (config) {
    config.set({
        basePath: './app',
        files: [
            'lib/angular/angular.js',
            'lib/angular-route/angular-route.js',
            './node_modules/angular-mocks/angular-mocks.js',
            'core/**/*.js',
            'login/**/*.js',
            'sticky-note/**/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
}