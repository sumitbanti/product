package com.product.service;

import java.util.List;

import com.product.model.ProductModel;

public interface ProductService {
	
	public List<ProductModel> getAllProducts();
	public void saveService(ProductModel productModel);
	public ProductModel getProductById(int id);

}
