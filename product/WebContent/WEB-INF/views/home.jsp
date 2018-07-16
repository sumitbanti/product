<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css" />
<link rel="stylesheet"
	href="https://formden.com/static/cdn/bootstrap-iso.css" />
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<script src="../dist/datepicker.js"></script>

<title>MyApp</title>
</head>
<body>

	<%-- <c:forEach items="${test}" var="student">
    <p>${student.name}</p><br/>
    <p>${student.status}</p><br/>
    <p>${student.date}</p><br/>
    
</c:forEach> --%>
	<table style="width: 50%;" class="table table-striped">
		<%-- <tr>
			<td align="right">
				<!-- <a href="#"
				class="btn btn-primary a-btn-slide-text"> <span
					class="glyphicon glyphicon-plus" aria-hidden="true" data-target="#myModal"></span> <span><strong>Add</strong></span>
			</a> -->
				<button type="button" class="btn btn-primary a-btn-slide-text"
					data-toggle="modal" data-target="#myModal">Add</button>
			</td>

			<div class="modal fade" id="myModal" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">Fill Up Data</h4>
						</div>
					
						<div class="modal-body">
							<form action="/product/save" method="post">
								<label data-error="wrong" data-success="right"
									for="orangeForm-name">Product name</label> <input type="text"
									id="orangeForm-name" class="form-control validate"
									placeholder=" Enter product name" name="name">
								<div></div>
								<br>

								<div class="dropdown">
								
								
								<label data-error="wrong" data-success="right"
									for="orangeForm-name">Category name</label> <input type="text"
									id="orangeForm-name" class="form-control validate"
									placeholder=" Enter product name" name="name">
								
									<!-- <button class="orm-control btn btn-default dropdown-toggle"
										type="button" data-toggle="dropdown" name="name">
										Select Category <span class="caret"></span>
									</button>
 -->

									<ul class="dropdown-menu" >
										<c:forEach items="${products}" var="category">

											<li><a name="name">${category.categoryModel.name}</a></li>

										</c:forEach>
									</ul>


									<script type="text/javascript">
									$('#category a').on('click', function(){    
									    $(this).parent().parent().prev().html($(this).html() + '<span class="caret"></span>');    
									})
									</script>




									
								</div>

								<br>

								<div></div>

								<div class="btn-group">
									<button type="button"
										class="form-control btn btn-default dropdown-toggle"
										data-toggle="dropdown">
										Select Status <span class="caret"></span>
									</button>
									<ul class="dropdown-menu" role="menu" id="status">
										<li><a href="#" name="inactive">Inactive</a></li>
										<li><a href="#" name="active">Active</a></li>

									</ul>

									<script type="text/javascript">
									$('.dropdown-menu a').on('click', function(){    
									    $(this).parent().parent().prev().html($(this).html() + '<span class="caret"></span>');    
									})
								</script>
								</div>

								
							


						

						<div class="modal-footer">
							<button type="submit" class="btn btn-primary" >Save</button>
						</div>
						</form>
						</div>
					</div>

				</div>
			</div>

		</tr>** --%>
		<tr>
			<td>
				<table style="width: 100%;" class="table table-bordered">

					<tr>
						<th scope="col">Product ID</th>
						<th scope="col">Product Name</th>
						<!-- <th scope="col">Category Name</th>  -->
						<th scope="col">Status</th>
						<th scope="col">Date</th>
						<th scope="col">Category Name</th>
						<th scope="col">Edit</th>

					</tr>

					<c:forEach items="${products}" var="student">
						<tr>
							<td>${student.id}</td>
							<td>${student.name}</td>
							<td>${student.status}</td>
							<td>${student.date}</td>
							<td>${student.categoryModel.name}</td>
							<td><a href="<c:url value='editemp/${student.id}' />" class="btn btn-primary a-btn-slide-text">
									<span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
									<span><strong>Edit</strong></span>
							</a></td>
						</tr>
					</c:forEach>


				</table>
	</table>
	
	<a href="add-product">Add Product</a>
	<!-- model -->



</body>
</html>