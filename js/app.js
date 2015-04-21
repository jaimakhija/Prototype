var app = angular.module('prototype', ['ui.bootstrap', 'ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'html/home.html',
                controller: 'HomeCtrl'
            }).
            when('/pushPlans', {
                templateUrl: 'html/pushPlans.html',
                controller: 'PushPlanCtrl'
            }).
            when('/registerServer', {
                templateUrl: 'html/registerServer.html',
                controller: 'RegisterServerCtrl'
            }).
            when('/selectServer', {
                templateUrl: 'html/selectServer.html',
                controller: 'SelectServerCtrl'
            }).
            when('/migration', {
                templateUrl: 'html/migration.html',
                controller: 'MigrationCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
        }
    ]);
