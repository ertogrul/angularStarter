var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
    
    //console.log($scope);
    //console.log($log);
    $log.log("Hello World ::) ");
    $log.info("This is some information");
    $log.warn("This is warning");
    $log.debug("Some debug information");
    $log.error("This is an error");
});