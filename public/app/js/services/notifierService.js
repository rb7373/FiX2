angular.module('app').value('toastrService', toastr);

angular.module('app').factory('notifierService', function(toastrService){
	return {
		notify: function(msg){
			toastrService.success(msg);
			console.log(msg);
		},
		notifyError: function(msg){
			toastrService.error(msg);
			console.log(msg);
		}
	}

})