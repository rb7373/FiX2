angular.module('app').controller('fixNavBarLoginCtrl', function($scope, $http, fixIdentity, fixNotifier, fixAuth, $location) {

	$scope.identity = fixIdentity;
	
	$scope.signIn = function(userName, password){
		fixAuth.authenticateUser(userName, password).then(function(success){
			if(success){
				fixNotifier.notify('You have successfully signed in!');	
				console.log(fixIdentity.isAuthenticated());
			}
			else{
				fixNotifier.notify('Username or Password combination incorrect ;(');
			}
		});
	}

	$scope.signOut = function(){
		fixAuth.logOutUser().then(function(){
			$scope.userName = "";
			$scope.password = "";
			fixNotifier.notify('You have successfully signed out');
			$location.path('/');
		})
	}
});