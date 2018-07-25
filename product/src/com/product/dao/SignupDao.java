package com.product.dao;

import org.springframework.stereotype.Repository;

import com.product.entity.SignupEntity;
@Repository
public class SignupDao extends GenericDAO<SignupEntity, Long>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SignupDao() {
		super(SignupEntity.class);
		// TODO Auto-generated constructor stub
	}

}
