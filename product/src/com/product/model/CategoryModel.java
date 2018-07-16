package com.product.model;

import java.util.List;

import com.product.common.Status;

public class CategoryModel {
	private Integer id;
	private String categoryName;
	private Status status;
	 private List<ProductModel> productModels;
	
	
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public List<ProductModel> getProductModels() {
		return productModels;
	}
	public void setProductModels(List<ProductModel> productModels) {
		this.productModels = productModels;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return categoryName;
	}
	public void setName(String name) {
		this.categoryName = name;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	
	

}
