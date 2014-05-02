requirejs.config({
  config: {
    
  },
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'knockout': 'vendor/knockout.js/knockout',
    'script':'script'
  },
  shim: {
    
  }
});

require(["jquery","knockout","script"], function($,knockout,script) {
  
});


