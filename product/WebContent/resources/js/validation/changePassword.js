$(document).ready(
		function() {
			
			$('#changePassword').submit(function(event) {

					var flag = true;
					
					var password = $("#password").val();
					var newPassword = $("#newPassword").val();
					var confirmNewPassword = $("#confirmNewPassword").val();
					
					
					if (isBlank(password, 'password')) {
						flag = false;

					}
					
					if(flag){
						if (isBlank(newPassword, 'New Password')) {
							flag = false;
						} 
					}
					
					if(flag){
						if (validatePassword(newPassword, 'New Password')) {
							flag = false;
						} 
					}
					
					if(flag){
						if (isBlank(confirmNewPassword, 'Confirm New Password')) {
							flag = false;
						} 
					}
					
					if(flag){
						if (validatePassword(confirmNewPassword, 'Confirm New Password')) {
							flag = false;
						} 
					}
					
					if(flag){
						
						if(checkPassword(newPassword,confirmNewPassword,'Password and confirm password')) {
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

function checkPassword(pass,confirmPass,data){
	if ($.trim(pass) != $.trim(confirmPass)) {
		jQuery.growl.error({
			message : data + " does not not match"
		});
		return true;
	}

	return false;
}


function validatePassword(password,data) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?#&])[A-Za-z\d$@$!%*?&]{6,20}/;
    
    if(!$.trim(password).match(pattern)){
    	jQuery.growl.error({
			message : data + " Invalid Format"
		});
		return true;
    }
    
    return false;
}