package com.product.dao;



import org.springframework.stereotype.Repository;

import com.product.entity.CategoryEntity;
@Repository("categoryDao")
public class CategoryDao extends GenericDAO<com.product.entity.CategoryEntity, Integer>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CategoryDao() {
		super(CategoryEntity.class);
		
	}
	
	

}
