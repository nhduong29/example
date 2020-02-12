<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Update your Information</title>
    
    <link href="<c:url value="/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/vendors/fontawesome-free-5.12.1-web/css/all.css"/>" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value="/vendors/bootstrap-select/css/bootstrap-select.min.css"/>">
	<link href="<c:url value="/css/ui.css"/>" rel="stylesheet" />
</head>
<body>
	<c:if test="${error !=null}">
  		<h3>Please login first</h3>
  		
  	</c:if>
    <c:if test="${error ==null}">
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
								<div class="avatar text-center">	    		
							    	<img src="<c:url value="/img/man.svg"/>" alt="your avatar" class="img-thumbnail rounded-circle" width="100">
							    	<div class="decs">
							    		<p class="name font-weight-bold">${user.name}</p>
							    		<p class="email">${user.email}</p>		    		
							    	</div>
						    	</div>
							</div>
							<div class="center">
								<form:form method="POST" modelAttribute="user" class="form-update" action="${contextPath}/update">
									<spring:bind path="username">
										<form:input readonly="true" type="hidden" path="username" class="form-control"  id="username" placeholder="Username"></form:input>
									</spring:bind>
									<spring:bind path="mobilephone">
										<div class="form-group ">
											<label for="mobilephone">Mobile Phone Number</label>
											<div class="input-group mb-2">
										        <div class="input-group-prepend">
										          <div class="input-group-text"><i class="fa fa-phone"></i></div>
										        </div>
												<form:input type="number" path="mobilephone" class="form-control"  id="mobilephone" placeholder="Mobile Phone"></form:input>
										     </div>
										</div>
									</spring:bind>
									<spring:bind path="mobilemodel">
										<div class="form-group">
											<label for="mobilephone">Mobile Model</label>
											<div class=" input-group">						
										    	<div class="input-group-prepend">
												    <span class="input-group-text"><i class="fas fa-mobile-alt"></i></span>
												</div>
												<form:select class="form-control" path="mobilemodel">
													<form:option value="Iphone"/>
													<form:option value="Android"/>
													<form:option value="Windows phone"/>
													<form:option value="Other"/>
												</form:select>
											</div>
										</div>
									</spring:bind>
									<c:if test="${message != null}">
										<div class="alert alert-success alert-dismissible fade show">
										    <button type="button" class="close" data-dismiss="alert">&times;</button>
										    <strong>Success!</strong> ${message}
										</div>
									</c:if>
									<div class="text-center">
										<button id="submit" type="submit" class="btn btn-lg btn-primary btn-block submit" >Save</button>				
									</div>
								</form:form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </c:if>
 <script src="<c:url value="/vendors/jquery/jquery.min.js" />"></script>
 <script src="<c:url value="/js/bootstrap.bundle.min.js"/>"></script>
 <script src="<c:url value="/vendors/bootstrap-select/js/bootstrap-select.min.js" />"></script>
 <script src="<c:url value="/js/main.js"/>"></script>
</body>
</html>
