package com.product.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.product.model.CategoryModel;

public interface CategoryService {
	
	public Long insertCategory(CategoryModel categoryModel);
	public List<CategoryModel> getAllCategores() throws Exception;

}
