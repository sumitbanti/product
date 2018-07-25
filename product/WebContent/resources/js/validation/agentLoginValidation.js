$(document).ready(function() {

	$('#agentForm').submit(function(event) {

		var flag = true;

		var emailId = $("#emailId").val();
		var password = $("#password").val();
		var captcha_response = grecaptcha.getResponse();

		if (isBlank(emailId, 'Email')) {
			flag = false;
		}
		if (flag) {
			if (validateEmail(emailId, 'Email')) {
				flag = false;
			}
		}

		if (flag) {
			if (isBlank(password, 'Password')) {
				flag = false;
			}
		}

		if (flag) {
			if (!validateform(captcha_response)) {
				var blankCaptcha = "";
				if (isCheck(blankCaptcha, 'Please Check')) {
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
function validateform(captcha_response) {
	
	if (captcha_response.length == 0) {
		// Captcha is not Passed
		return false;
	} else {
		// Captcha is Passed
		return true;
	}
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

function isCheck(string, data) {
	if (string == null || string.trim() == "") {
		jQuery.growl.error({
			message : data + " Google Captcha"
		});
		return true;
	}

	return false;
}

function validateEmail(Email, data) {
	var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	if (!$.trim(Email).match(pattern)) {
		jQuery.growl.error({
			message : data + " Invalid Format"
		});
		return true;
	}

	return false;
}