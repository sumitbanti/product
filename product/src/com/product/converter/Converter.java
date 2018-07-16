package com.product.converter;

import java.io.Serializable;
import java.util.List;

import org.springframework.stereotype.Component;

public interface Converter <E, M> extends Serializable{
	
public E modelToEntity(M m);
	
	public M entityToModel(E e);//
	
   public  List<M> entityToModel(List<E> es);
	
   public List<E> modelToEntity(List<M> ms);

}
