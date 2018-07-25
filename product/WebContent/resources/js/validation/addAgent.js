$(document).ready(
		function() {
			
			$('#agentFormValidation').submit(function(event) {

					var flag = true;
					
					var companyId = $("#companyId").val();
					var firstName = $("#firstName").val();
					var lastName = $("#lastName").val();
					var mobileNo = $("#mobileNo").val();
					var emailId = $("#emailId").val();
					
					if (isBlank(companyId, 'Company')) {
						flag = false;
					}
					if(flag){ 
						if (isBlank(firstName, 'First Name')) {
							flag = false;
						} 
					}
					if(flag){ 	
						if (isBlank(lastName, 'Last Name')) {
							flag = false;
						} 
					}
					
					if(flag){ 	
						if (isBlank(emailId, 'Email')) {
							flag = false;
						} 
					}
					
					if(flag){ 
						if (validateEmail(emailId,'Email')) {
							flag = false;
						} 
					}
					
					if(flag){ 	
						if (isBlank(mobileNo, 'Mobile No')) {
							flag = false;
						} 
					}
					
					if(flag){ 
						if (validateMobile(mobileNo,'Mobile No')) {
							flag = false;
						} 
					}
					
					if (flag) {
						return true;
					}

					return false;
					
				});
			
			$('.number_only').keyup(function() {

				var $th = $(this);
				$th.val($th.val().replace(/[^0-9]/g, function(str) {
					return '';
				})); 
			});
			
		});

function validateMobile(mobileNo,data) {
    var pattern = /^\+(?:\d(?:\(\d{3}\)|\d{3})\d{3}(?:\d{2}\d{2}|\d{4})|\d{12,15})$/g;
    
    if(!$.trim(mobileNo).match(pattern)){
    	jQuery.growl.error({
			message : data + " Invalid Format"
		});
		return true;
    }
    
    return false;
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

function validateEmail(Email,data) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    if(!$.trim(Email).match(pattern)){
    	jQuery.growl.error({
			message : data + " Invalid Format"
		});
		return true;
    }
    
    return false;
}