angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl: '/partials/partials/mainPartial',
            controller: 'mainController'
        })

        .when('/topics', {
            templateUrl: '/partials/partials/topicListPartial',
            controller: 'topicListController'
        })

        .when('/topics/:id', {
            templateUrl: '/partials/partials/topicDetailsPartial',
            controller: 'topicDetailsController'
        })
        .when('/topics/practices/:topic', {
            templateUrl: '/partials/partials/quizPartial',
            controller: 'quizController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

