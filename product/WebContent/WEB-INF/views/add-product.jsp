<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Add New Employee</h1>
	<form method="post" action="save">
		<table>
			<tr>
				<td>Name :</td>
				<td><input name="name" /></td>
			</tr>

			
			
			<tr>
				<td>Category Name :</td>
				
				<td>
					
					<select name="categoryModel.id">
						<c:forEach items="${categories}" var="category">
						<ul>
							<li>
							<option value="${category.id}">${category.categoryName}</option>
							</li>
						</ul>
						
						</c:forEach>
					</select>
					
				</td>
			</tr>
			
			<tr>
				<td></td>
				<td><input type="submit" value="Save" /></td>
			</tr>
		</table>
	</form>

</body>
</html>