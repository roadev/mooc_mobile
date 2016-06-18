angular.module('mooc.controllers', [])

.controller('AppCtrl', function() {})

.controller('CoursesCtrl', function($http, $scope) {

  $scope.courses = [];
  $http.get('http://informaticaeducativaucc.com/rest/cursos')
  	.then(function(successResponse){
       $scope.courses = successResponse.data;
       console.log(successResponse);
    }, function(errorResponse){
       $scope.error = errorRepsonse;
    });
});