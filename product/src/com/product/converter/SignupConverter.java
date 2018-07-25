package com.product.converter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.product.dao.SignupDao;
import com.product.entity.SignupEntity;
import com.product.model.SignupModel;
@Component
public class SignupConverter implements Converter<SignupEntity, SignupModel>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
	SignupDao signupdao;

	@Override
	public SignupEntity modelToEntity(SignupModel signupModel) {
		SignupEntity signupEntity = new SignupEntity();
		signupEntity.setEmail(signupModel.getEmail());
		signupEntity.setPassword(signupModel.getPassword());
		signupEntity.setRepeatPassword(signupModel.getRepeatPassword());
		return (SignupEntity) signupdao.save(signupEntity);
	}

	@Override
	public SignupModel entityToModel(SignupEntity e) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SignupModel> entityToModel(List<SignupEntity> es) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SignupEntity> modelToEntity(List<SignupModel> ms) {
		// TODO Auto-generated method stub
		return null;
	}

}
