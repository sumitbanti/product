$(document).ready(
		function() {
			
			$('#add_cash').submit(function(event) {

					var flag = true;
					
					var phoneNumber = $("#phoneNumber").val();
					var amount = $("#amount").val();

					if (isBlank(phoneNumber, 'Mobile Number')) {
						flag = false;
					} 
					
					if(flag){ 	
						if (isBlank(amount, 'Amount')) {
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

function phoneno(){          
    $('#mobileNo').keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!(a.indexOf(k)>=0))
            e.preventDefault();
    });
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