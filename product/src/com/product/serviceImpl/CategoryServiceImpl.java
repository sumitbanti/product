package com.product.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.product.converter.CategoryConverter;
import com.product.dao.CategoryDao;
import com.product.entity.CategoryEntity;
import com.product.model.CategoryModel;
import com.product.service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryConverter categoryConverter;
	@Autowired
	private CategoryDao categoryDao;

	@Override
	public Long insertCategory(CategoryModel categoryModel) {
		CategoryEntity categoryEntity = categoryConverter.modelToEntity(categoryModel);
		long result = (Long) categoryDao.save(categoryEntity);
		return result;
	}

	@Override
	public List<CategoryModel> getAllCategores() throws Exception {
		List<CategoryEntity> categoryEntities = categoryDao.findAll();
		List<CategoryModel> categoryModels = categoryConverter.entityToModel(categoryEntities);
		return categoryModels;
	}

}
