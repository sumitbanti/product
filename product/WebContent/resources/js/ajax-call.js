$(document).ready(
		function() {

			// From Currency to ToCurrency
			
			$("#currencyIdFrom").change(
					function() {
						var currencyIdFrom = $("#currencyIdFrom").val();
						$.ajax({
							url : "../ajaxMapping/ajaxCurrencyList?currencyId="+ currencyIdFrom,
							async: false,
							error : function(XMLHttpRequest, textStatus, errorThrown) {
								console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
							},
							success : function(region) {
								//console.log(region);
								var currencyoptions = "";
								currencyoptions+="<option value=''> Choose one </option>";
								$.each(region, function(index, element) {
									currencyoptions += "<option value=\"" + element.currencyId + "\">" + element.currencyName + "</option>";
									
								});

								$("#currencyIdTo").html(currencyoptions);
							}
						});
					});
			
			
			// From Tier to Range
			
			$("#tierId").change(function() {
				
						var tierId = $("#tierId").val();
						$.ajax({
							url : "../ajaxMapping/fetchRangeByTier?tierId="+ tierId,
							async: false,
							error : function(XMLHttpRequest, textStatus, errorThrown) {
								console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
							},
							success : function(range) {
								
								var res = range.split(",");
								var $range = $(".js-range-slider");

								$range.ionRangeSlider({
							 		type: "double",
							 	    grid: true,
							 	    min: res[0],
							 	    max: res[1],
							 	    from: res[0],
							 	    to: res[1],
							 	    prefix: "$"
							 	});
							 	
							 	var slider = $range.data("ionRangeSlider");
							 	slider.update({
										 		type: "double",
										 	    grid: true,
										 	    min: res[0],
										 	    max: res[1],
										 	    from: res[0],
										 	    to: res[1],
										 	    prefix: "$"
							 	    	});
							 	$range.data("ionRangeSlider").reset();
							 	
							 	$("#rangeDivView").show();
							}
						});
						 
						$.ajax({
							
							url : "../ajaxMapping/fetchUserByRange?tierId="+ tierId+"&range=",
							async: false,
							error : function(XMLHttpRequest, textStatus, errorThrown) {
								console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
							},
							success : function(userModel) {
								var useroptions = '';
								$.each(userModel, function(index, element) {
									useroptions += '<option selected value="' + element.userId + '">' + element.firstName + ' '+ element.lastName + '</option>';
								});
								
								$("#userIdSelect").html(useroptions);
								$('#userIdSelect').multiselect('rebuild');
						        
								if(useroptions !=""){
						         $('#userIdSelect').multiselect('enable');
						        }else{
						         $('#userIdSelect').multiselect('disable');
						        }
						        
							}
						});
						
						
						
					});
			
			
			$(".js-range-slider").change(function(){
				var rangeVal = $(".js-range-slider").val();
				var tierId = $("#tierId").val();
				$.ajax({
					url : "../ajaxMapping/fetchUserByRange?tierId="+ tierId+"&range="+rangeVal,
					async: false,
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
					},
					success : function(userModel) {
						var useroptions = '';
						$.each(userModel, function(index, element) {
							useroptions += '<option selected value="' + element.userId + '">' + element.firstName + ' '+ element.lastName + '</option>';
						});
						
						$("#userIdSelect").html(useroptions);
						$('#userIdSelect').multiselect('rebuild');
				        
						if(useroptions !=""){
				         $('#userIdSelect').multiselect('enable');
				        }else{
				         $('#userIdSelect').multiselect('disable');
				        }
				        
					}
				});
				
			});
			
		});