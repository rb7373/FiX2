angular.module('app').controller('navBarLoginController', function($scope, $http, identityService, notifierService, authService, $location) {

	$scope.identity = identityService;
	
	$scope.signIn = function(userName, password){
		authService.authenticateUser(userName, password).then(function(success){
			if(success){
				notifierService.notify('You have successfully signed in!');	
				console.log(identityService.isAuthenticated());
			}
			else{
				notifierService.notify('Username or Password combination incorrect ;(');
			}
		});
	}

	$scope.signOut = function(){
		authService.logOutUser().then(function(){
			$scope.userName = "";
			$scope.password = "";
			notifierService.notify('You have successfully signed out');
			$location.path('/');
		})
	}
});