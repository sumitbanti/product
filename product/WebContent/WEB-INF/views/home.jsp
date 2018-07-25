<!DOCTYPE html>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>Collapsible sidebar using Bootstrap 3</title>

<!-- Bootstrap CSS CDN -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- Our Custom CSS -->
<link rel="stylesheet" href="<%=basePath%>resources/css/login.css">
<link rel="stylesheet" href="<%=basePath%>resources/css/style.css">
<link rel="stylesheet" href="<%=basePath%>resources/css/sign-up.css">
<!-- Scrollbar Custom CSS -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">

</head>
<body>

	<div class="wrapper">
		<!-- Sidebar Holder -->
		<nav id="sidebar">
			<!-- <div id="dismiss">
                    <i class="glyphicon glyphicon-arrow-left"></i>
                </div> -->

			<div class="sidebar-header">
				<h3>Welcome</h3>
			</div>

			<ul class="list-unstyled components">
				<p>Dummy Heading</p>
				<li class="active"><a href="#homeSubmenu"
					data-toggle="collapse">Home</a> <!-- <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Home 1</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">Home 3</a></li>
                        </ul> --></li>
				<li><a href="#">About</a> <a href="#pageSubmenu"
					data-toggle="collapse" aria-expanded="false">Services</a>
					<ul class="collapse list-unstyled" id="pageSubmenu">
						<li><a href="#">Feed</a></li>
						<li><a href="#">Egg</a></li>
						<li><a href="#">Page 3</a></li>
					</ul></li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">Contact</a></li>
			</ul>


		</nav>

		<!-- Page Content Holder -->
		<div id="content">

			<!-- Login start -->

			<ul class="nav navbar-nav navbar-right">
				<!-- <li><p class="navbar-text">Already have an account?</p></li> -->
				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
					<ul id="login-dp" class="dropdown-menu">
						<li>
							<div class="row">
								<div class="col-md-12">



									<form class="form" role="form" method="post" action="login"
										accept-charset="UTF-8" id="login-nav">
										<div class="form-group">
											<label class="sr-only" for="exampleInputEmail2">Email
												address</label> <input type="email" class="form-control"
												id="exampleInputEmail2" placeholder="Email address" required>
										</div>
										<div class="form-group">
											<label class="sr-only" for="exampleInputPassword2">Password</label>
											<input type="password" class="form-control"
												id="exampleInputPassword2" placeholder="Password" required>
											<div class="help-block text-right">
												<a href="">Forget the password ?</a>
											</div>
										</div>
										<div class="form-group" id="test">
											<button type="submit" class="btn btn-primary btn-block"
												id="test">Sign in</button>
										</div>

										<div class="checkbox">
											<label> <input type="checkbox"> keep me
												logged-in
											</label>
										</div>
									</form>
								</div>
								<div class="bottom text-center">
									New here ?
									<button
										onclick="document.getElementById('id01').style.display='block'">
										<b>Join Us</b>
									</button>
								</div>
							</div>
						</li>
					</ul></li>
			</ul>
			<!-- login end -->



		</div>
	</div>
	<!-- Sign up start -->

	<div id="id01" class="modal">
		<span onclick="document.getElementById('id01').style.display='none'"
			class="close" title="Close Modal">&times;</span>
		<form class="modal-content" role="form" action="sign-up" method="post">
			<div class="container">
				<h1>Sign Up</h1>
				<p>Please fill in this form to create an account.</p>
				<hr>
				<label for="email"><b>Email</b></label> <input type="text"
					placeholder="Enter Email" name="email" required> <label
					for="psw"><b>Password</b></label> <input type="password"
					placeholder="Enter Password" name="password" required> <label
					for="psw-repeat"><b>Repeat Password</b></label> <input
					type="password" placeholder="Repeat Password" name="repeatPassword"
					required> <label> <input type="checkbox"
					checked="checked" name="remember" style="margin-bottom: 15px">
					Remember me
				</label>

				<p>
					By creating an account you agree to our <a href="#"
						style="color: dodgerblue">Terms & Privacy</a>.
				</p>

				<div class="clearfix">
					<button type="button"
						onclick="document.getElementById('id01').style.display='none'"
						class="cancelbtn">Cancel</button>
					<button type="submit" class="signupbtn" >Sign Up</button>
				</div>
			</div>
		</form>
	</div>

	<!-- Sign up end -->


	<div class="overlay"></div>


	<!-- jQuery CDN -->
	<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
	<!-- Bootstrap Js CDN -->
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<!-- jQuery Custom Scroller CDN -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>

	<script type="text/javascript">
		$(document).ready(function() {
			$("#sidebar").mCustomScrollbar({
				theme : "minimal"
			});
	
			$('#dismiss, .overlay').on('click', function() {
				$('#sidebar').removeClass('active');
				$('.overlay').fadeOut();
			});
	
			$('#sidebarCollapse').on('click', function() {
				$('#sidebar').addClass('active');
				$('.overlay').fadeIn();
				$('.collapse.in').toggleClass('in');
				$('a[aria-expanded=true]').attr('aria-expanded', 'false');
			});
		});
	</script>

	<!-- sign up start -->
	<script>
		// Get the modal
		var modal = document.getElementById('id01');
	
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	</script>
	<!-- sign up close -->

</body>
</html>
