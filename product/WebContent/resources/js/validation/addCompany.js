$(document).ready(
		function() {
			
			$('#addCompany').submit(function(event) {

					var flag = true;
					
					var companyName = $("#companyName").val();

					if (isBlank(companyName, 'Company Name')) {
						flag = false;
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