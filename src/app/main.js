requirejs.config({
  paths: {
    'knockout': 'vendor/knockout.js/knockout'
  }
});

require(['knockout','viewmodels/fizzybuzz'], function(ko,fizzyBuzzViewModel) {
	ko.applyBindings(fizzyBuzzViewModel);
});