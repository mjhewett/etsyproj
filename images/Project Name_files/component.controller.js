(function() {
  'use strict';

  angular.module('app')

  .controller('ComponentCtrl', function ($scope, $http, HEROKU, $stateParams) {


    var url = HEROKU.URL + 'parts/' + $stateParams.component;

    $http.get(url).success( function (data) {


      $scope.items = data;


      console.log(data);

    });

    //
    $scope.properties = ['Brand', 'Price', 'Sale'];


    $scope.items = ['Processor 1', 'Processor 2', 'Processor 3', 'Processor 4'];

  });

}());


