var app = angular.module('myModule', []);

app.controller('hardCtrl', function($scope, $http){

  $scope.searchCriteria = function(subSearch) {
    myFactory.setJSON(subSearch).then(function(){
      $location.path('/output');
    });
  }

});
