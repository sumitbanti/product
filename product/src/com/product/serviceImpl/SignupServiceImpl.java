package com.product.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.converter.SignupConverter;
import com.product.dao.SignupDao;
import com.product.entity.SignupEntity;
import com.product.model.SignupModel;
import com.product.service.SignupService;
@Service
public class SignupServiceImpl implements SignupService{
	
	@Autowired
	SignupDao signupDao;
	@Autowired
	SignupConverter signupConverter;
	SignupEntity signupEntity;

	@Override
	public void signUp(SignupModel signupModel) {
		signupEntity = signupConverter.modelToEntity(signupModel);
		signupDao.save(signupEntity);
		
	}

}
