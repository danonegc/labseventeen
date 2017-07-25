var app = angular.module('myModule');

app.factory('myFactory', function($http){

  var results = [];

  return {
    setJSON: setJSON,
    getJSON: getJSON
  }

  function setJSON(subSearch) {
    $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/awww.json'
    }).then(function successfulCallback(response){
      console.log(response);
      results = response.data.data.children;
    });
  }

    function getJSON() {
      return results;
    }

});
