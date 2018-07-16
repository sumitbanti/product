package com.product.converter;


import java.util.ArrayList;
import java.util.List;



import org.springframework.stereotype.Component;

import com.product.entity.CategoryEntity;
import com.product.entity.ProductEntity;
import com.product.model.CategoryModel;
import com.product.model.ProductModel;

import javassist.bytecode.stackmap.BasicBlock.Catch;

@Component("categoryConverter")
public class CategoryConverter implements Converter<CategoryEntity, CategoryModel>{


	@Override
	public CategoryEntity modelToEntity(CategoryModel categoryModel) {
		CategoryEntity categoryEntity = new CategoryEntity();
		categoryEntity.setName(categoryModel.getName());
		categoryEntity.setStatus(categoryModel.getStatus());
		
		return categoryEntity;
	}

	@Override
	public CategoryModel entityToModel(CategoryEntity categoryEntity) {
		CategoryModel categoryModel = new CategoryModel();
		categoryModel.setName(categoryEntity.getName());
		categoryModel.setStatus(categoryEntity.getStatus());
		return categoryModel;
	}

	@SuppressWarnings("unused")
	@Override
	public List<CategoryModel> entityToModel(List<CategoryEntity> categoryEntities) {
		List<CategoryModel> categoryModels = new ArrayList<CategoryModel>();;
		
			if(categoryEntities != null){
				for(CategoryEntity categoryEntity : categoryEntities){
					
					CategoryModel categoryModel = new CategoryModel();
					categoryModel.setId(categoryEntity.getId());
					categoryModel.setName(categoryEntity.getName());
					categoryModels.add(categoryModel);
					
					
				}
				
			}
			
		
			System.out.println(categoryModels);
		
			return categoryModels;
		
					
			
			
	}

	@Override
	public List<CategoryEntity> modelToEntity(List<CategoryModel> ms) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
