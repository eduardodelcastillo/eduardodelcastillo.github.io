(function(){
	var app = angular.module('formVal', ['ngAnimate']);
	app.controller('formValidate', function($scope, $http){
		$scope.formData;
		$scope.checkInfo = function(e, form) {
			if(form){
				e.preventDefault();
				console.log(form);
				console.log($.param($scope.formData));
				$http({
					method  : 'POST',
	                url     : 'contact-form.php',
	                data    : $.param($scope.formData),  //param method from jQuery
	                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
				}).success(function(data){
	                console.log(data);
	                if (data.success) { //success comes from the return json object
	                	// alert('SUCCESS!!!!!!!')
	                	$scope.resultMessage = data.message;
	                	$scope.formData = '';
	                	$scope.form.$setPristine();
	                    $scope.result='bg-success';
	                } else {
	                	// alert('error')
	                	$scope.resultMessage = data.message;
	                    $scope.result='bg-danger';
	                }
	            });
				// console.log('name: ' + $scope.formData.name);

			};
		}
	});
})();