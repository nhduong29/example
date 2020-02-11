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
	<link href="<c:url value="/css/common.css"/>" rel="stylesheet" />
</head>
<body>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
	  <a class="navbar-brand" href="#">
		<img src="<c:url value="/img/update.svg"/>" width="30" height="30" class="d-inline-block align-top" alt="">
	</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="/login">Login</a>
	      </li>
	    </ul>
	  </div>
	</nav>
  <div class="container">
  	<c:if test="${error !=null}">
  		<h3>Please login first</h3>
  		
  	</c:if>
    <c:if test="${error ==null}">
    <div class="card bg-white card-form shadow  mx-auto">
    	<article class="card-body">
	    	<h4 class="card-title mt-3 text-center">Your Informations</h4>
	    	<div class="avatar text-center">	    		
		    	<img src="<c:url value="/img/man.svg"/>" alt="your avatar" class="img-thumbnail rounded-circle" width="100">
		    	<div class="decs">
		    		<p class="name font-weight-bold">${user.name}</p>
		    		<p class="email">${user.email}</p>		    		
		    	</div>
	    	</div>
	    	<form:form method="POST" modelAttribute="user" class="form-update" action="${contextPath}/update">
				<spring:bind path="username">
					<form:input readonly="true" type="hidden" path="username" class="form-control"  id="username" placeholder="Username"></form:input>
				</spring:bind>
				<div class="row">
					<div class="col-7">
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
					</div>
					<div class="col-5">
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
					</div>
				</div>
				<spring:bind path="address">
					<div class="form-group ">
						<label for="address">Address</label> 
						<div class="input-group mb-2">
					        <div class="input-group-prepend">
					          <div class="input-group-text"><i class="far fa-envelope"></i></div>
					        </div>
							<form:textarea rows="2" path="address" class="form-control"  id="address" placeholder="Address"></form:textarea>
					     </div>
					</div>
				</spring:bind>
				<div class="text-center">
					<button id="submit" type="submit" class="btn btn-lg btn-primary btn-block submit" >Save</button>				
				</div>
				
				<c:if test="${message != null}">
					<div class="alert alert-success alert-dismissible fade show">
					    <button type="button" class="close" data-dismiss="alert">&times;</button>
					    <strong>Success!</strong> ${message}
					</div>
				</c:if>
			</form:form>
	    </article>
    </div>
    
    
        <%-- <form id="logoutForm" method="POST" action="${contextPath}/logout">
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
           rtrt ${user.username} rtrt
        </form>

        <h2>Welcome ${pageContext.request.userPrincipal.name} | <a onclick="document.forms['logoutForm'].submit()">Logout</a></h2> --%>
        
        
    </c:if>
  </div>
 <script src="<c:url value="/vendors/jquery/jquery.min.js" />"></script>
 <script src="<c:url value="/js/bootstrap.bundle.min.js"/>"></script>
 <script src="<c:url value="/vendors/bootstrap-select/js/bootstrap-select.min.js" />"></script>
 <script src="<c:url value="/js/main.js"/>"></script>
</body>
</html>
