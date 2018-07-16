<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  

		<h1>Edit Product</h1>
       <form method="POST" action="/SpringJDBC/editsave">  
      	<table >  
      	<tr>
      	<td></td>  
         <td><hidden  path="id" /></td>
         </tr> 
         <tr>  
          <td>Name : </td> 
          <td><input name="name"  /></td>
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
          <td> </td>  
          <td><input type="submit" value="Edit Save" /></td>  
         </tr>  
        </table>  
       </form>  
