var app = angular.module('myModule');

app.directive('searchCriteria', function(){
  return {
    replace: false,
    restrict: 'E',
    templateUrl:'partials/newresults.html'
  }
})

app.directive('outputCtrl', function(){
  return {
    replace: true,
    retstrict: 'E',
    template: 'partials/'
  }
})
