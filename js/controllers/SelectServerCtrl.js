angular.module('prototype').controller('SelectServerCtrl', ['$scope', function($scope) {
    $scope.servers = serversData;
}]);


var serversData = [{
    ip: "1.1.8.170",
    username: "stefan.panait"
}, {
    ip: "1.1.8.220",
    username: "joe.brady"
}, {
    ip: "1.1.7.110",
    username: "maybe.maybelline"
}]
