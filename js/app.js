var app = angular.module('prototype', ['ui.bootstrap', 'ngRoute', 'ngTable'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'html/home.html',
                controller: 'HomeCtrl'
            }).
            when('/pushPlans/', {
                templateUrl: 'html/pushPlans.html',
                controller: 'PushPlanCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
        }
    ]);
