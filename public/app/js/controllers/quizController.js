angular.module('app').controller('quizController', function($scope, quizResource, $routeParams){
	console.log("Solicitando quiz");
	console.log($routeParams.topic);
	//$scope.quiz = topicResource.get({_id:$routeParams.id});
});
