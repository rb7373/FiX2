angular.module('app').controller('quizController', function($scope, $window, quizResource, notifierService, $routeParams, $log) {

    $scope.maxSize = 5;
	$scope.quizQuestions = [];
	$scope.results = [];
	$scope.currentQuestion = undefined;
	$scope.currentIdQuestion = undefined;

	$scope.quiz = quizResource.get({
		topic: $routeParams.topic
	}, function() {
		$scope.title = $scope.quiz.title;
		$scope.quizQuestions = $scope.quiz.questions;
		$scope.createResults();
		$scope.totalItems = $scope.quizQuestions.length*10;
		$scope.totalQuestions = $scope.totalItems/10;
		$scope.currentIdCuestion = 1;
		$scope.currentPage = $scope.currentIdCuestion;
		$scope.currentQuestion = $scope.quizQuestions[$scope.currentIdCuestion - 1];
	}, function(error){
		notifierService.notifyError("Error from server");
		$window.location='/';	
	});

	$scope.createResults = function() {

		//angular.forEach(scope.quizQuestions, function(_question){

		//});

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
  	console.log("Page set");
  	console.log(pageNo);
    $scope.currentPage = pageNo;
	$scope.currentIdQuestion = $scope.currentPage;
	$scope.currentQuestion = $scope.quizQuestions[$scope.currentIdQuestion - 1];
  };

  $scope.pageChanged = function(pageNo) {
  	console.log("Page change");
  	console.log(pageNo);
	$scope.currentIdQuestion = pageNo;
	$scope.currentQuestion = $scope.quizQuestions[$scope.currentIdQuestion - 1];
  };


});