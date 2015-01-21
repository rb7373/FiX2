angular.module('app').controller('quizController', function($scope, quizResource, $routeParams, $log) {

	$scope.quizQuestions = [];
	$scope.results = [];

	//

	$scope.quiz = quizResource.get({
		topic: $routeParams.topic
	}, function() {
		$scope.title = $scope.quiz.title;
		$scope.quizQuestions = $scope.quiz.questions;
		$scope.createResults();
		$scope.totalItems = $scope.quizQuestions.length*10;
		//$scope.totalItems = $scope.totalItems*50;
		$scope.totalQuestions = $scope.totalItems/10;
		$scope.currentPage = 1;
	});

	$scope.createResults = function() {
		var questionsLength = $scope.quizQuestions.length;
		for (var i = 0; i < questionsLength; i++) {
			$scope.results.push({
				_id: $scope.quizQuestions._id,
				correctAnswer: $scope.quizQuestions.answers,
				userAnswer: null,
				score: null
			});
		}
	};

	$scope.checkUserChoice = function(question, userAnswer) {
		$scope.results[question - 1].userAnswer = userAnswer;
		if ($scope.results[question - 1].correctAnswer === userAnswer) {
			$scope.results[question - 1].score = 'Correct';
		} else {
			$scope.results[question - 1].score = 'Incorrect';
		}
	};

  $scope.totalItems = 1;
  $scope.currentPage = 1;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;

  $scope.textTest = "Introduction Grid systems are used for creating pageIntroduction Grid systems are used for creating pageIntroduction Grid systems are used for creating pageIntroduction Grid systems are used for creating pageIntroduction Grid systems are used for creating pageIntroduction Grid systems are used for creating pageIntroduction Grid systems are used for creating pageIntroduction Grid systems are used for creating page";

});