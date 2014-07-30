/* weatherController.js */

(function() {
  var app = angular.module('weatherApp');

  app.controller('weatherController', function($scope, $http, $sce) {

    $scope.getWeather = function(e) {
      e.preventDefault();

      //alert('inside');

      $http.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: $scope.city_name}
      })
      .success(function(results) {
        $scope.info = results;
        $scope.main = results.weather[0].main;
        $scope.temp = results.main.temp;
        $scope.fahren = (9/5 * ($scope.temp - 273) + 32);
        $scope.tempFormat = $sce.trustAsHtml("&nbsp;&#8457;");
        $scope.celsius = $scope.temp - 273;
        $scope.tempFormat2 = $sce.trustAsHtml("&nbsp;&#8451;");                
        $scope.humidity = results.main.humidity;

        //alert($scope.humidity)
      })
      .error(function(error) {
        console.log(error);
      });
    }
  });
})();