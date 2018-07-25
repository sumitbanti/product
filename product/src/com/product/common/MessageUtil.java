package com.product.common;

import java.util.ResourceBundle;

import org.springframework.stereotype.Component;
@Component
public class MessageUtil {
	
	private static ResourceBundle resourceBundle = null;
	static {
		resourceBundle=ResourceBundle.getBundle("resources.message");
	}
	public String getBundle(String key) {
       System.out.println(resourceBundle.getString(key));
       System.out.println();
		return resourceBundle.getString(key);
	}

}
 