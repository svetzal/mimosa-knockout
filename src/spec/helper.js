requirejs.config({
  baseUrl: '../app',
  paths: {
    'knockout': 'vendor/knockout.js/knockout',
    'jasmine': 'vendor/jasmine/jasmine',
    'jasmine-html': 'vendor/jasmine/jasmine-html',
    'boot': 'vendor/jasmine/boot'
  },
  shim: {
    'jasmine': {
      exports: 'jasmineRequire',
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmineRequire'
    },
    'boot': {
      deps: ['jasmine', 'jasmine-html'],
      exports: 'jasmineRequire'
    }
  }
});

require(['boot'], function() {
  require(['../spec/decision', '../spec/fizzbuzz','../spec/utilities'], function() {
    window.onload();
  });
});
