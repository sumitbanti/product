package com.product.dao;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import com.product.entity.ProductEntity;
import com.product.model.ProductModel;
@Repository

public class ProductDao extends GenericDAO<ProductEntity, Long>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ProductDao() {
		super(ProductEntity.class);
		
	}
	public ProductEntity findById(Integer id){
		Transaction transaction =null;
		Session session = sessionFactory.getCurrentSession();
		transaction = session.beginTransaction();
		
		
		try{
			
			ProductEntity productEntity = (ProductEntity) session.get(ProductEntity.class, id);
			return productEntity;
			}finally{
				transaction.commit();
			}
		
	}

}
