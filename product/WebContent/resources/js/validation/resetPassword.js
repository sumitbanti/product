$(document).ready(
		function() {
			
			$('#resetPassword').submit(function(event) {

					var flag = true;
					
					var password = $("#password").val();
					var newPassword = $("#newPassword").val();
					
					if (isBlank(password, 'password')) {
						flag = false;

					}
					
					if(flag){
						if (validatePassword(password, 'Password')) {
							flag = false;
						} 
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
						
						if(checkPassword(password,newPassword,'Password and confirm password')) {
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
	if (pass != confirmPass) {
		jQuery.growl.error({
			message : data + " does not not match"
		});
		return true;
	}

	return false;
}

function validatePassword(password,data) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}/;
    
    if(!$.trim(password).match(pattern)){
    	jQuery.growl.error({
			message : data + " Invalid Format"
		});
		return true;
    }
    
    return false;
}

