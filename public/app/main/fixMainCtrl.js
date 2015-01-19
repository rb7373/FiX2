angular.module('app').controller('fixMainCtrl', function($scope, topicResource) {
	$scope.topics = topicResource.query();
});