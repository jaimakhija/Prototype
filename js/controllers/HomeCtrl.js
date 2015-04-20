angular.module('prototype').controller('HomeCtrl', ['$scope', function($scope) {
    $scope.projects = projectsData;

    $scope.pushPlans = [{
        name: "CPAUCBU-26",
        date: "17th March 2015"
    }, {
        name: "CPAUCBU-13",
        date: "5th March 2015"
    }, {
        name: "CPAUCBU-10",
        date: "7th February 2015"
    }, {
        name: "CPAUCBU-09",
        date: "2nd January 2015"
    }];

    function getData($defer, params) {
        $defer.resolve(pushPlans);
    }
    console.log("It works");


    $scope.fields = [{
        name: "stefan",
        type: 'email',
        placeholder: "email",
        required: ''
    }];
}]);

var projectsData = [{
    name: "Viper"
}, {
    name: "Test"
}, {
    name: "Data"
}]
