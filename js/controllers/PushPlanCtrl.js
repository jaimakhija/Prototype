angular.module('prototype').controller('PushPlanCtrl', ['$scope', function($scope) {
    $scope.pushPlanList = pushPlanDataFromSomewhere;
    $scope.filterName;
    $scope.filter = {}

    $scope.updateFilter = function() {
        $scope.filter = {};
        $scope.filter.name = $scope.filterName;
        if ($scope.filterManual || $scope.filterDatabase) $scope.filter.flags = {};
        if ($scope.filterManual) $scope.filter.flags.manual = true;
        if ($scope.filterDatabase) $scope.filter.flags.database = true;
    }
}]);

var pushPlanDataFromSomewhere = [{
    "_id": "553175068dd6cc442a90cb25",
    "status": 'approved',
    "name": "Le Peterson",
    "email": "lepeterson@parcoe.com",
    "date": "2015-04-16T23:31:26 +04:00",
    "content": "Hello, Le Peterson! You have 2 unread messages.",
    "flags": {
        "manual": true,
        "database": true
    }
}, {
    "_id": "55317506b1598a58b1e6681a",
    "status": 'approved',
    "name": "Desiree Mejia",
    "email": "desireemejia@parcoe.com",
    "date": "2014-09-21T01:57:00 +04:00",
    "content": "Hello, Desiree Mejia! You have 10 unread messages.",
}, {
    "_id": "55317506736665cab109e4e7",
    "status": 'approved',
    "name": "Snyder Heath",
    "email": "snyderheath@parcoe.com",
    "date": "2014-05-12T09:47:26 +04:00",
    "content": "Hello, Snyder Heath! You have 7 unread messages.",
    "flags": {
        "database": true
    }
}, {
    "_id": "553175065e9d002ea318d43d",
    "status": 'rejected',
    "name": "Antoinette Maldonado",
    "email": "antoinettemaldonado@parcoe.com",
    "date": "2014-08-26T13:41:42 +04:00",
    "content": "Hello, Antoinette Maldonado! You have 8 unread messages.",
    "flags": {
        "manual": true,
    }
}, {
    "_id": "553175069f636c4df372f977",
    "status": 'proposed',
    "name": "Gina Sparks",
    "email": "ginasparks@parcoe.com",
    "date": "2014-10-27T14:47:28 +04:00",
    "content": "Hello, Gina Sparks! You have 6 unread messages.",
}]
