$(document).ready(
		function() {
			
			$('#addContentForm').submit(function(event) {

					var flag = true;
					
					var languageId = $("#languageId").val();
					var url = $("#url").val();
					
					
					if (isBlank(languageId, 'Language')) {
						flag = false;
					}
					if(flag){ 
						if (isBlank(url, 'Content Type')) {
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
					
					if (flag) {
						return true;
					}

					return false;
					
				});
			
			$('#editContentForm').submit(function(event) {

				var flag = true;
				
				var languageId = $("#languageId").val();
				var url = $("#url").val();
				
				
				if (isBlank(languageId, 'Language')) {
					flag = false;
				}
				if(flag){ 
					if (isBlank(url, 'Content Type')) {
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

