angular.module('prototype').controller('HomeCtrl', ['$scope', '$ngTableParams', function($scope) {
    $scope.user = "Jayesh Makhija";
    $scope.prodServer = "17th March 2015";
    $scope.ip = "1.1.7.160";
    $scope.myServer = "7th February 2015";

    $scope.tableParams = new ngTableParams(parameter, settings);
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
}]);
