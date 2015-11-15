'use strict';

// Declare app level module which depends on views, and components
angular.module('rsaWebApp', [
  'ngRoute',
  'rsaWebApp.module',
  'rsaWebApp.version',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
