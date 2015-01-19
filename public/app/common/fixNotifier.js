angular.module('app').value('fixToastr', toastr);

angular.module('app').factory('fixNotifier', function(fixToastr){
	return {
		notify: function(msg){
			fixToastr.success(msg);
			console.log(msg);
		}
	}

})