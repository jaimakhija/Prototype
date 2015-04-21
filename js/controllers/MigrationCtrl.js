angular.module('prototype').controller('MigrationCtrl', ['$scope', function($scope) {
    $scope.rollbacks = rollbackpushplandata;
    $scope.rollouts = rolloutpushplandata;
}]);

var rollbackpushplandata = [{
    "_id": "553175068dd6cc442a90cb25",
    "status": 'approved',
    "name": "GUIE-1907 - Remove Non-Custom DAP Segments",
    "email": "lepeterson@parcoe.com",
    "date": "2015-04-16T23:31:26 +04:00",
    "content": "# On DB<br> USE Viper2;<br/> , <br> \n --check if any placement / sections / floor rates are mapped to public segments <br> < br > --expected 0 < br > SELECT pdm.placementID < br > FROM placementDAPMappings pdm < br > JOIN audienceTargetingSegments ats USING(segmentID) < br > LEFT JOIN audienceTargetingSegmentTypeMappings atstm ON(atstm.segmentTypeID = ats.segmentTypeID) < br > JOIN rtbPlacements p ON(p.placementID = pdm.placementID) < br > WHERE atstm.segmentTypeID IS NULL < br > AND p.status = 'A'; < br > < br > --expected 1 < br > SELECT sdm.sectionID < br > FROM sectionDAPMappings sdm < br > JOIN audienceTargetingSegments ats USING(segmentID) < br > LEFT JOIN audienceTargetingSegmentTypeMappings atstm ON(atstm.segmentTypeID = ats.segmentTypeID) < br > JOIN rtbSections s ON(s.sectionID = sdm.sectionID) < br > WHERE atstm.segmentTypeID IS NULL < br > AND s.status = 'A'; < br > < br > --expected 0 < br > SELECT count( * ) < br > FROM rtbDAPFloors f < br > JOIN audienceTargetingSegments ats USING(segmentID) < br > LEFT JOIN audienceTargetingSegmentTypeMappings atstm ON(atstm.segmentTypeID = ats.segmentTypeID) < br > JOIN sites s ON(s.siteID = f.siteID) < br > WHERE atstm.segmentTypeID IS NULL < br > AND s.status = 'A'; < br > < br > --expected 0 < br > SELECT count( * ) < br > FROM rtbDAPPlacementFloors f < br > JOIN audienceTargetingSegments ats USING(segmentID) < br > LEFT JOIN audienceTargetingSegmentTypeMappings atstm ON(atstm.segmentTypeID = ats.segmentTypeID) < br > JOIN rtbPlacements p ON(p.placementID = f.placementID) < br > WHERE atstm.segmentTypeID IS NULL < br > AND p.status = 'A'; < br > < br > BEGIN WORK; < br > < br > DELETE FROM sectionDAPMappings WHERE sectionID = 6488 and segmentID = 20216; < br > < br > COMMIT; < br > < br > #GUI M2P < br > /install/viper - gui - ctl.git / bin / m2p.pl--product = GUI--branch = production < br > ",
    "flags": {
        "manual": true,
        "database": true,
        "configuration": true
    }
}, {
    "_id": "55317506b1598a58b1e6681a",
    "status": 'proposed',
    "name": "2015-03-30 Push 1 - GUIE-1903",
    "email": "desireemejia@parcoe.com",
    "date": "2014-09-21T01:57:00 +04:00",
    "content": "# Install server /#    GUI M2P\ / install / viper - gui - ctl.git / bin / m2p.pl--product = GUI--branch = production / #GUIAPP M2P\ / install / viper - gui - ctl.git / bin / m2p.pl--product = GUIAPPJOBS--branch = production\ ",
}]

var rolloutpushplandata = [];
