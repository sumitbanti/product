package com.product.dao;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



public abstract class GenericDAO <E, PK extends Serializable> implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Class<E> entityClass;
	
	@Autowired
	protected SessionFactory sessionFactory;

	public GenericDAO(Class<E> entityClass) {
		this.entityClass = entityClass;
	}
	
	public void update(E entity) {
		sessionFactory.getCurrentSession();
	}
	
	public void delete(E entity) {

		sessionFactory.getCurrentSession().delete(entity);
	}
	
	public Serializable save(E entity) {
		
		Transaction transaction =null;
		Session session = sessionFactory.getCurrentSession();
		transaction = session.beginTransaction();
		
		try {
			sessionFactory.getCurrentSession().save(entity);
			
		} catch (Exception e) {
			System.out.println("Error");
		}finally{
			transaction.commit();
			System.out.println("Hello");
		}
		System.out.println("Hi");
		return null;
	}
	
	public void saveOrUpdate(E entity) {

		//sessionFactory.getCurrentSession().saveOrUpdate(entity);
		Transaction transaction =null;
		Session session = sessionFactory.getCurrentSession();
		transaction = session.beginTransaction();
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(entity);
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			transaction.commit();
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<E> findAll() {
		//Query query = sessionFactory.createQuery("from Employee");
		Transaction transaction =null;
		Session session = sessionFactory.getCurrentSession();
		transaction = session.beginTransaction();
		
		try{
		
		Criteria cr = session.createCriteria(entityClass);
			return cr.list();
		}catch (Exception e) {
			
			e.printStackTrace();
			
			/*String hql = "Select e.name,e.status,a.name From ProductEntity as e join e.categoryId as a where e.id = a.id";
			Query query = session.createQuery(hql);
			System.out.println(query);
			List<E> list = (List<E>) query.list();
			return  list;*/
		}finally{
			transaction.commit();
		}
		//return null;
		return null;
	}
	
	@SuppressWarnings("unchecked")
	public E find(PK id) {
		
		Transaction transaction =null;
		Session session = sessionFactory.getCurrentSession();
		transaction = session.beginTransaction();
		try{
		return (E) session.get(entityClass, id);
		}finally{
			transaction.commit();
		}
		
	}
	
	public Class<E> getEntityClass() {
		return entityClass;
	}
	
	public void setEntityClass(Class<E> entityClass) {
		this.entityClass = entityClass;
	}
	
	@PostConstruct
	public void init() {
		// System.out.println(getClass() + " Init fire ");
	}

	@PreDestroy
	public void destroy() {
		// System.out.println(getClass() + " destroy fire ");
	}

}
