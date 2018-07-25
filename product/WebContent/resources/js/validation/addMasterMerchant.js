$(document).ready(
		function() {
			
			$('#addMasterMerchant').submit(function(event) {

					var flag = true;
					
					var merchantSubCategoryId = $("#merchantSubCategoryId").val();
					var masterMerchantName = $("#masterMerchantName").val();
					
					if (isBlank(merchantSubCategoryId, 'Merchant Sub Category')) {
						flag = false;
					}
					
					if(flag){ 
						if (isBlank(masterMerchantName, 'Master Merchant Name')) {
							flag = false;
						} 
					}
					
					if (flag) {
						return true;
					}

					return false;
					
				});
			
			$('#updateMasterMerchant').submit(function(event) {

				var flag = true;
				
				var merchantSubCategoryId = $("#merchantSubCategoryId").val();
				var masterMerchantName = $("#masterMerchantName").val();
				var status = $("#status").val();
				
				if (isBlank(merchantSubCategoryId, 'Merchant Sub Category')) {
					flag = false;
				}
				
				if(flag){ 
					if (isBlank(masterMerchantName, 'Master Merchant Name')) {
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
