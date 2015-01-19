angular.module('app').factory('fixAuth', function($http, fixIdentity, $q){
	return {
		authenticateUser: function(userName, password){
			var qDefer = $q.defer();
			$http.post('/login', {userName: userName, password: password}).then(function(response){
				if (response.data.success){
					console.log('logged in!');
					fixIdentity.currentUser = response.data.user;
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
				fixIdentity.currentUser = undefined;
				qDefer.resolve();
			});
			return qDefer.promise;
		}
	}
});