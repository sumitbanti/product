$(document).ready(
		function() {
			
			$('#sendNotificationForm').submit(function(event) {

					var flag = true;
					var tierId = $("#tierId").val();
					var userIdSelect = $("#userIdSelect").val();
					var title = $("#title").val();
					var message = $("#message").val();
					
					if (isBlank(tierId, 'Tier')) {
						flag = false;
					}
					
					if(flag){ 
						if (isBlank(userIdSelect, 'Users')) {
							flag = false;
						} 
					}
					
					if(flag){ 
						if (isBlanko(title, 'Header')) {
							flag = false;
						} 
					}
					
					if(flag){ 
						if (isBlanko(message, 'Message')) {
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
	if (string == null) {
		jQuery.growl.error({
			message : data + " can not be blank"
		});
		return true;
	}

	return false;
}

function isBlanko(string, data) {
	if (string == null || string.trim() == "") {
		jQuery.growl.error({
			message : data + " can not be blank"
		});
		return true;
	}

	return false;
}
