angular.module('app').controller('topicDetailsController', function($scope, topicResource, $routeParams){
	console.log("Solicitando lista de temas");
	$scope.topic = topicResource.get({_id:$routeParams.id});
});
