 angular.module('app').factory('fixIdentity', function(){
	return {
		currentUser: undefined,
		isAuthenticated: function(){
			return !!this.currentUser;
		}
	}
});