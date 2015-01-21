angular.module('app').controller('mainController', function($scope, topicResource) {
	$scope.topics = topicResource.query();

	$scope.customer = {
	      name: 'Naomi',
	      address: '1600 Amphitheatre'
	    };
		
});