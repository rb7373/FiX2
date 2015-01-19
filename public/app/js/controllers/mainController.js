angular.module('app').controller('mainController', function($scope, topicResource) {
	$scope.topics = topicResource.query();
});