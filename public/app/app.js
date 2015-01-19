angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'fixMainCtrl'
        })

        .when('/topics', {
            templateUrl: '/partials/partials/topics/topicListPartial',
            controller: 'topicListController'
        })

        .when('/topics/:id', {
            templateUrl: '/partials/partials/topics/topicDetailsPartial',
            controller: 'topicDetailsController'
        })
        .when('/topics/practices/:topic', {
            templateUrl: '/partials/partials/topics/practices/practicePartial',
            controller: 'quizController'
        })
});

