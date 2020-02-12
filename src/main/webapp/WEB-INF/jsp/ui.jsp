<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title></title>
    
    <link href="<c:url value="/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/vendors/fontawesome-free-5.12.1-web/css/all.css"/>" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value="/vendors/bootstrap-select/css/bootstrap-select.min.css"/>">
	<link href="<c:url value="/css/ui.css"/>" rel="stylesheet" />
</head>
<body>
	<div class="limiter">
		<div class="container-dn-form" style="background-image: url('<c:url value="/img/bg.png"/>');">
			<div class="wrapper shadow">
				
				<div class="banner" style="background-image: url('<c:url value="/img/form.jpg"/>');">
					<div class="top">
						<h4 class="card-title mt-3">Portal SSO customization</h4>
						<p>Please help us to update your informations to enhance the system.</p>
					</div>
					<div class="center">
						<%-- <img src="<c:url value="/img/man.svg"/>" alt="" class="img-fluid" width="300"> --%>
					</div>
					<div class="bottom">
						<ul class="nav">
						  <li class="nav-item">
						    <a class="nav-link active" href="#">Home</a>
						  </li>
						  <li class="nav-item">
						    <a class="nav-link" href="#">Link 1</a>
						  </li>
						  <li class="nav-item">
						    <a class="nav-link" href="#">Link 2</a>
						  </li>
						</ul>
					</div>
					
				</div>
				<div class="form">
					<div class="left-wrapper">
						<div class="top">
							<h4 class="card-title mt-3">Update Form</h4>
						</div>
						<div class="center">
							<form class="form-update">
								<div class="form-group ">
									<label for="mobilephone">Mobile Phone Number</label>
									<div class="input-group mb-2">
								        <div class="input-group-prepend">
								          <div class="input-group-text"><i class="fa fa-phone"></i></div>
								        </div>
										<input type="number"  class="form-control"  id="mobilephone" placeholder="Mobile Phone"></input>
								     </div>
								</div>
								<div class="form-group">
									<label for="mobilephone">Mobile Model</label>
									<div class=" input-group">						
								    	<div class="input-group-prepend">
										    <span class="input-group-text"><i class="fas fa-mobile-alt"></i></span>
										</div>
										<select class="form-control">
											<option value="Iphone"/>
											<option value="Android"/>
											<option value="Windows phone"/>
											<option value="Other"/>
										</select>
									</div>
								</div>
								<div class="form-group ">
									<label for="address">Address</label> 
									<div class="input-group mb-2">
								        <div class="input-group-prepend">
								          <div class="input-group-text"><i class="far fa-envelope"></i></div>
								        </div>
										<textarea rows="2" class="form-control"  id="address" placeholder="Address"></textarea>
								     </div>
								</div>
								<div class="text-center">
									<button id="submit" type="submit" class="btn btn-lg btn-primary btn-block submit" >Save</button>				
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
 <script src="<c:url value="/vendors/jquery/jquery.min.js" />"></script>
 <script src="<c:url value="/js/bootstrap.bundle.min.js"/>"></script>
 <script src="<c:url value="/vendors/bootstrap-select/js/bootstrap-select.min.js" />"></script>
 <script src="<c:url value="/js/main.js"/>"></script>
</body>
</html>
