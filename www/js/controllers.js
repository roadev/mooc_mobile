angular.module('mooc.controllers', [])

.controller('CoursesCtrl', function($scope, $http) {

  $scope.courses = [];
  $http.get('http://informaticaeducativaucc.com/rest/cursos')
  	.then(function(successResponse){
       $scope.courses = successResponse.data;
    }, function(errorRepsonse){
       $scope.error = errorRepsonse;
    });
})