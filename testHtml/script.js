


var myAppModule = angular.module('myApp', ['ng-addPub']);

// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('greet', function() {
    return function(name) {
        return 'Hello, ' + name + '!';
    };
});
