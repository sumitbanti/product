package com.product.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.converter.ProductConverter;
import com.product.dao.ProductDao;
import com.product.entity.ProductEntity;
import com.product.model.ProductModel;
import com.product.service.ProductService;
@Service

public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductDao productDao;
	@Autowired
	private ProductConverter productConverter;
	

	@Override
	public List<ProductModel> getAllProducts() {
		List<ProductEntity> productEntities = productDao.findAll();
		List<ProductModel> productModels = productConverter.entityToModel(productEntities);
		//System.out.println(productModels);
		return productModels;
	}


	@Override
	public void saveService(ProductModel productModel) {
		ProductEntity productEntity = productConverter.modelToEntity(productModel);
		 productDao.saveOrUpdate(productEntity);
		
	}


	


	@Override
	public ProductModel getProductById(int id) {
		ProductEntity productEntity = productDao.findById(id);
		ProductModel productModel = productConverter.entityToModel(productEntity);
		return productModel;
	}

}
