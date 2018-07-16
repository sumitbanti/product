package com.product.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.product.dao.CategoryDao;
import com.product.entity.CategoryEntity;
import com.product.entity.ProductEntity;
import com.product.model.CategoryModel;
import com.product.model.ProductModel;
@Component
public class ProductConverter implements Converter<ProductEntity, ProductModel>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private CategoryDao categoryDao;

	@Override
	public ProductEntity modelToEntity(ProductModel productModel) {
		
	
		
		ProductEntity productEntity = new ProductEntity();
		CategoryEntity categoryEntity = null;
		try {
			
			productEntity.setName(productModel.getName());
			productEntity.setStatus(productModel.getStatus());
			//productEntity.setCreatedDate(productModel.getDate());
			System.out.println("called");
			//categoryEntity.setName(productModel.getName());
			//categoryEntity.setId(productModel.getCategoryModel().getId());
			//categoryEntity.setName(productModel.getCategoryModel().getName());
			//CategoryEntity categoryEntity =new CategoryEntity();
			//categoryEntity.setName(productModel.getCategoryModel().getName());
			//categoryEntity.setName(productModel.getCategoryModels().get(0).getName());
			categoryEntity = categoryDao.find(new Integer(productModel.getCategoryModel().getId()));
			productEntity.setCategoryEntity(categoryEntity);
			
			System.out.println(productEntity);
			System.out.println(categoryEntity);
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			
			System.out.println(productEntity);
			System.out.println(categoryEntity);
			
			
		}
		
		
		return productEntity;
	}

	@Override
	public ProductModel entityToModel(ProductEntity productEntity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ProductModel> entityToModel(List<ProductEntity> productEntities) {
		List<ProductModel> productModels = null;
		try {
			if(productEntities != null){
				for(ProductEntity productEntity : productEntities){
					if(productModels == null){
						productModels = new ArrayList<ProductModel>();
					}
					ProductModel productModel = new ProductModel();
					productModel.setId(productEntity.getId());
					productModel.setName(productEntity.getName());
					productModel.setStatus(productEntity.getStatus());
					productModel.setDate(productEntity.getCreatedDate());
					CategoryModel categoryModel = new CategoryModel();
					categoryModel.setName(productEntity.getCategoryEntity().getName());
				
					productModel.setCategoryModel(categoryModel);
					
					productModels.add(productModel);
					System.out.println();
					
				}
			}
		//	return productModels;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return productModels;
		
	}

	@Override
	public List<ProductEntity> modelToEntity(List<ProductModel> productModels) {
		// TODO Auto-generated method stub
		return null;
	}

}
