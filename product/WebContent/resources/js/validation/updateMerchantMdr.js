$(document).ready(
		function() {
			
			$('#updateMerchantMdr').submit(function(event) {

					var flag = true;
					
					var flatFee = $("#flatFee").val();
					var percentage = $("#percentage").val();
					var status = $("#status").val();
					
					if(flag){
						if((flatFee == null || flatFee.trim() == "")){							
							if((percentage == null || percentage.trim() == "")) {
								flag = false;
								jQuery.growl.error({
									message : " Percentage or Flat Fee Cannot Be Blank"
								});
								
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



function isBlank(string, data) {
	if (string == null || string.trim() == "") {
		jQuery.growl.error({
			message : data + " can not be blank"
		});
		return true;
	}

	return false;
}
