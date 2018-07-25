$(document).ready(
		function() {
			
			$('#addMerchantCategory').submit(function(event) {

					var flag = true;
					
					var categoryName = $("#categoryName").val();
					
					if (isBlank(categoryName, 'Category Name')) {
						flag = false;
					}
					
					if (flag) {
						return true;
					}

					return false;
					
				});
			
			$('#updateMerchantCategory').submit(function(event) {

				var flag = true;
				
				var categoryName = $("#categoryName").val();
				var status = $("#status").val();
				
				if (isBlank(categoryName, 'Category Name')) {
					flag = false;
				}
				
				if(flag){ 
					if (isBlank(status, 'Status')) {
						flag = false;
					} 
				}
				
				if (flag) {
					return true;
				}

				return false;
				
			});			
			
		});



function isBlank(string, data) {
	if (string == null || string.trim() == "") {
		jQuery.growl.error({
			message : data + " can not be blank"
		});
		return true;
	}

	return false;
}
