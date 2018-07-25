$(document).ready(
		function() {
			
			$('.number_only').keyup(function() {

				var $th = $(this);
				$th.val($th.val().replace(/[^0-9]/g, function(str) {
					return '';
				})); 
			});
			
		/*	$('.decimalNumber').keyup(function() {
				
				var $th = $(this);		
				$th.val($th.val().replace(/^[1-9]\\d*(\\.\\d+)?$/g, function(str) {
					return '';
				})); 
			});*/
			
			 $('.blockInput').keydown(function(e) {
	        	   e.preventDefault();
	        	   return false;
	        });
			 
			$('.alpha_only').keyup(function() {

				var $th = $(this);
				$th.val($th.val().replace(/[^a-zA-Z ]*$/g, function(str) {
					return '';
				})); 
			});
			
			/*$('.amount_only').keyup(function() {

				var $th = $(this);
				$th.val($th.val().replace(/^\d+(?:\.\d\d?)?$/g, function(str) {
					return '';
				})); 
			});*/
			
			$(function() {
			   $(".amount_only").keypress(function(e) {
			       var val = $(this).val();
			       var regex = /^(\+|-)?(\d*\.?\d{1,2})$/;
			       if (regex.test(val + String.fromCharCode(e.charCode))) {
			           return true;
			       }
			       return false;
			   });
			});
			
			$(function() {
				   $(".amount_only_value").keypress(function(e) {
				  
					   var val = $(this).val();
				       var regex = /\d+(\.\d{1,2})?/;
				       alert(regex.test(val));
				       if (regex.test(val + String.fromCharCode(e.charCode))) {
				           return true;
				       }
				       return false;
				       
				   });
				});
			
			$('.special_not_only').keyup(function() {

				var $th = $(this);
				$th.val($th.val().replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, function(str) {
					return '';
				})); 
			});
			
			$('.10digit_only').keyup(function() {

				var $th = $(this);
				$th.val($th.val().replace(/^\+(?:\d(?:\(\d{3}\)|\d{3})\d{3}(?:\d{2}\d{2}|\d{4})|\d{12,15})$/g, function(str) {
					return str;
				})); 
			});
			
			$('.mobile_only').keyup(function() {

				var $th = $(this);
				$th.val($th.val().replace(/^\+(?:\d(?:\(\d{3}\)|\d{3})\d{3}(?:\d{2}\d{2}|\d{4})|\d{12,15})$/g, function(str) {
					return str;
				})); 
			});
			
			$('.numbersOnly').keyup(function () { 
			    this.value = this.value.replace(/[^0-9\.]/g,'');
			});
			
		});