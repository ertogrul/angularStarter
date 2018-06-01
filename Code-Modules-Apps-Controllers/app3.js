var angularApp = angular.module('angularApp', []);
    
angularApp.controller('mainController', function($scope) {
    $scope.name = "Michal";
    $scope.occupation = "Coder";
    $scope.getname = function () {
        return "great !!!!";
    }
    $scope.getname();
    console.log($scope);
    
});