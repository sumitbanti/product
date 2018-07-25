$(document).ready(
		function() {
			
			$('#addMerchantSubCategory').submit(function(event) {

					var flag = true;
					
					var merchantCategoryId = $("#merchantCategoryId").val();
					var subCategoryName = $("#subCategoryName").val();
					
					if (isBlank(merchantCategoryId, 'Merchant Category')) {
						flag = false;
					}
					
					if(flag){ 
						if (isBlank(subCategoryName, 'Sub Category Name')) {
							flag = false;
						} 
					}
					
					if (flag) {
						return true;
					}

					return false;
					
				});
			
			$('#updateMerchantSubCategory').submit(function(event) {

				var flag = true;
				
				var merchantCategoryId = $("#merchantCategoryId").val();
				var subCategoryName = $("#subCategoryName").val();
				var status = $("#status").val();
				
				if (isBlank(merchantCategoryId, 'Merchant Category')) {
					flag = false;
				}
				
				if(flag){ 
					if (isBlank(subCategoryName, 'Sub Category Name')) {
						flag = false;
					} 
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
