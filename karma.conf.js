module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.test.js': ['webpack']
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
