$(document).ready(
		function() {
			
			$('#exchangeRateForm').submit(function(event) {

					var flag = true;
					
					var currencyIdFrom = $("#currencyIdFrom").val();
					var currencyIdTo = $("#currencyIdTo").val();
					var exchangeRate = $("#exchangeRate").val();

					if (isBlank(currencyIdFrom, 'Currency From')) {
						flag = false;
					} 
					
					if (flag) {
						if (isBlank(currencyIdTo, 'Currency To')) {
							flag = false;
						} 
					}
					
					if (flag) {
						if (isBlank(exchangeRate, 'Exchange')) {
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

function isBlank(string, data) {
	if (string == null || string.trim() == "") {
		jQuery.growl.error({
			message : data + " can not be blank"
		});
		return true;
	}

	return false;
}