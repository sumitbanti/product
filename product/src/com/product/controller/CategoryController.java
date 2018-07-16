package com.product.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.product.model.CategoryModel;
import com.product.model.ResponseModel;
import com.product.service.CategoryService;

public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping(value = "/category-details", method = RequestMethod.POST)
	@ResponseBody
	public ResponseModel insertCategory(@RequestBody CategoryModel categoryModel, HttpServletRequest httpServletRequest){
		
		ResponseModel responseModel = null;
		try {
			responseModel = new ResponseModel();
			 categoryService.insertCategory(categoryModel);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return responseModel;
		
	}
	
	@RequestMapping(value = "/category-details")
	@ResponseBody
	public ResponseModel getAllCategory(@RequestBody CategoryModel categoryModel, HttpServletRequest httpServletRequest){
		
		ResponseModel responseModel = null;
		try {
			responseModel = new ResponseModel();
			List<CategoryModel> categoryModels = categoryService.getAllCategores();
			responseModel.setData(categoryModels);
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return responseModel;
	}
	
	
	
}
