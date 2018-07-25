$(document).ready(
		function() {
			
			$('#updateFeedBack').submit(function(event) {

					var flag = true;
					
					var assignedTo = $("#assignedTo").val();
					var assignedEmail = $("#assignedEmail").val();
					var status = $("#status").val();

					if (isBlank(assignedTo, 'Assigned To')) {
						flag = false;
					} 
					
					if(flag){ 	
						if (isBlank(assignedEmail, 'Assigned Email')) {
							flag = false;
						} 
					}
					
					if(flag){ 	
						if (validateEmail(assignedEmail, 'Assigned Email')) {
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