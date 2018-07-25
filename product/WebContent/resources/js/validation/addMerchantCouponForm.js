$(document).ready(
		function() {
			
			$('#addMerchantCouponForm').submit(function(event) {

					var flag = true;
					
					var merchantCouponSettingId = $("#merchantCouponSettingId").val();
					var couponName = $("#couponName").val();
					var description = $("#description").val();
					/*var flatFee = $("#flatFee").val();
					var percentage = $("#percentage").val();*/
					var minimumValue = $("#minimumValue").val();
					var validityStartDateVal = $("#validityStartDateVal").val();
					var validityEndDateVal = $("#validityEndDateVal").val();
					var usageStartDateVal = $("#usageStartDateVal").val();
					var usageEndDateVal = $("#usageEndDateVal").val();
					var usageLimitType = $("#usageLimitType").val();
					var usageLimit = $("#usageLimit").val();
					
					var status = $("#status").val();
					
					if(couponName == ""){
						if (isBlank(couponName, 'Coupon Name')) {
							flag = false;
						}
					}
					
					if(flag){ 
						if (isBlank(description, 'Description')) {
							flag = false;
						}
					}
					
					if(flag){ 
						if (isBlank(validityStartDateVal, 'Validity Start Date')) {
							flag = false;
						} 
					}
					
					if(flag){ 
						if (isBlank(validityEndDateVal, 'Validity End Date')) {
							flag = false;
						} 
					}
					
					if(flag){ 
						if (isBlank(usageStartDateVal, 'Usage Start Date')) {
							flag = false;
						} 
					}
					
					if(flag){ 
						if (isBlank(usageEndDateVal, 'Usage End Date')) {
							flag = false;
						} 
					}
					
					if(usageLimitType == "DAY"){
						
						if(flag){ 
							if (isBlank(usageLimit, 'Usage Limit')) {
								flag = false;
							} 
						}
					} 
					
					if(merchantCouponSettingId != ""){
						if(flag){ 
							if (isBlank(status, 'Status')) {
								flag = false;
							} 
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
