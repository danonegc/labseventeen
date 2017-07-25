var app = angular.module('myModule');

app.controller('hardCtrl', function($scope, myFactory){

  $scope.results = myFactory.getJSON();

});
