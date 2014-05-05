requirejs.config({
  config: {

  },
  paths: {
    'knockout': 'vendor/knockout.js/knockout'
  },
  shim: {

  }
});

require(['knockout','viewmodels/fizzybuzz'], function(ko,fizzyBuzzViewModel) {
	ko.applyBindings(fizzyBuzzViewModel);
});