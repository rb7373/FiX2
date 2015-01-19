 angular.module('app').factory('identityService', function(){
	return {
		currentUser: undefined,
		isAuthenticated: function(){
			return !!this.currentUser;
		}
	}
});