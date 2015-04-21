angular.module('prototype').controller('HomeCtrl', ['$scope', function($scope) {
    $scope.projects = projectsData;
    $scope.filter = {
        status: "!complete"
    };

    $scope.open = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: function() {},
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


    $scope.updateFilter = function() {
        $scope.filter = {};
        $scope.filter.name = $scope.filterName;
        if ($scope.filterComplete) delete $scope.filter.status;
        if (!$scope.filterComplete) $scope.filter.status = "!complete";
    }

    //checkout
    //view push plans
    //go to Jira
    //

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
    name: "Project that is in Dev",
    status: "development"
}, {
    name: "Project that is complete",
    status: "complete"
}, {
    name: "Project that is in testing",
    status: "testing"
}]
