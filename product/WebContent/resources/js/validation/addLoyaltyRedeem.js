$(document).ready(
		function() {
			
			$('#addLoyaltyRedeem').submit(function(event) {

					var flag = true;
					
					var type = $("#type").val();
					var loyaltyPoint = $("#loyaltyPoint").val();
					var serviceId = $("#serviceId").val();
					
					if (isBlank(type, 'Type')) {
						flag = false;
					}
					
					if(flag){ 
						if (isBlank(loyaltyPoint, 'Loyalty Point')) {
							flag = false;
						} 
					}
					
					if(flag){
						if(!isNormalInteger(loyaltyPoint)){
							jQuery.growl.error({
								message : "Loyalty Point Should Numeric"
							});
							return false;
						}
					}
					
					if(type == 'PAYGO'){
						
						if(flag){ 
							if (isBlank(serviceId, 'Service')) {
								flag = false;
							} 
						}
					}
					
					if (flag) {
						return true;
					}

					return false;
					
				});
			
			$('#updateLoyaltyRedeem').submit(function(event) {

				var flag = true;
				
				var type = $("#type").val();
				var loyaltyPoint = $("#loyaltyPoint").val();
				var serviceId = $("#serviceId").val();
				var status = $("#status").val();
				
				if (isBlank(type, 'Type')) {
					flag = false;
				}
				
				if(flag){ 
					if (isBlank(loyaltyPoint, 'Loyalty Point')) {
						flag = false;
					} 
				}
				
				if(flag){
					if(!isNormalInteger(loyaltyPoint)){
						jQuery.growl.error({
							message : "Loyalty Point Should Numeric"
						});
						return false;
					}
				}
				
				if(type == 'PAYGO'){
					
					if(flag){ 
						if (isBlank(serviceId, 'Service')) {
							flag = false;
						} 
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


function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

function isBlank(string, data) {
	if (string == null || string.trim() == "") {
		jQuery.growl.error({
			message : data + " can not be blank"
		});
		return true;
	}

	return false;
}
