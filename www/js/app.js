(function() {

var app = angular.module('mooc', ['ionic', 'mooc.controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
  
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  
  .state('app.courses', {
    url: '/app/courses',
    views: {
      'menuContent': {
        templateUrl: 'templates/courses.html',
        controller: 'CoursesCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/courses');
});

}()


);