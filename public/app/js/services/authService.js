angular.module('app').factory('authService', function($http, identityService, $q){
	return {
		authenticateUser: function(userName, password){
			var qDefer = $q.defer();
			$http.post('/login', {userName: userName, password: password}).then(function(response){
				if (response.data.success){
					console.log('logged in!');
					identityService.currentUser = response.data.user;
					qDefer.resolve(true);
				}
				else{
					qDefer.resolve(false);
				}
			});
			return qDefer.promise;
		},
		logOutUser: function(){
			var qDefer = $q.defer();
			$http.post('/logout', {logout:true}).then(function(){
				identityService.currentUser = undefined;
				qDefer.resolve();
			});
			return qDefer.promise;
		}
	}
});