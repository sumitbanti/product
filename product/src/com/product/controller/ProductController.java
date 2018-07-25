package com.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.product.model.ProductModel;
import com.product.service.CategoryService;
import com.product.serviceImpl.ProductServiceImpl;


@Controller

public class ProductController {
	@Autowired
	private ProductServiceImpl productServiceImpl;
	@Autowired
	private CategoryService categoryService;
	
	/*@RequestMapping(value="/")
	public String test(ModelMap modelMap){
		modelMap.addAttribute("test", "667867576");
		return "home"; 
	}*/
	/*@RequestMapping(value = "/", method=RequestMethod.GET)
	public String display(ModelMap modelMap){
		
		modelMap.addAttribute("products",productServiceImpl.getAllProducts());
		return "home";
	}*/
	
	@RequestMapping("/add-product")
	public ModelAndView addEmployeeForm() throws Exception{
		ModelMap modelMap = new ModelMap();
		modelMap.addAttribute("products", productServiceImpl.getAllProducts());
		modelMap.addAttribute("categories", categoryService.getAllCategores());
		return new ModelAndView("add-product",modelMap);
	}
	
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ModelAndView saveProduct(@ModelAttribute("save") ProductModel productModel, BindingResult result) {
		productServiceImpl.saveService(productModel);
		return new ModelAndView("redirect:/");
	}
	@RequestMapping(value = "/editemp/{id}")
	public ModelAndView editProduct(@PathVariable int id) throws Exception{
		ModelMap modelMap = new ModelMap();
		ProductModel productModel = productServiceImpl.getProductById(id);
		modelMap.addAttribute("categories", categoryService.getAllCategores());
		return new ModelAndView("edit-product", modelMap);
		
	}
}
