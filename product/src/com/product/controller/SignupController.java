package com.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;



import com.product.model.SignupModel;
import com.product.service.SignupService;

@Controller
public class SignupController {
	@Autowired
	SignupService signupService;
	
	
	@RequestMapping(value = "/", method=RequestMethod.GET)
	public String display(ModelMap modelMap){
		
		modelMap.addAttribute("");
		return "home";
	}
	
	
	@RequestMapping(value = "/sign-up", method = RequestMethod.POST)
	public ModelAndView SignUp(@ModelAttribute("signup") SignupModel signupModel, BindingResult result) {
		
		signupService.signUp(signupModel);
		return new ModelAndView("redirect:/");
	}

}
