<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Update your Information</title>
    <c:url value="/css/bootstrap.min.css" var="bootstrapCss" />
    <link href="${bootstrapCss}" rel="stylesheet">
    
    <c:url value="/vendors/fontawesome-free-5.12.1-web/css/all.css" var="fontawesomeCss" />
    <link href="${fontawesomeCss}" rel="stylesheet">
    
    <c:url value="/css/common.css" var="commonCss" />
	<link href="${commonCss}" rel="stylesheet" />
</head>
<body>
  <div class="container">
    <c:if test="${pageContext.request.userPrincipal.name != null}">
    <div class="card bg-white card-form shadow  mx-auto">
    	<article class="card-body">
	    	<h4 class="card-title mt-3 text-center">Your Informations</h4>
	    	<div class="avatar text-center">	    		
		    	<img src="<c:url value="/img/avatar.svg"/>" alt="your avatar" class="img-thumbnail rounded-circle" width="100">
		    	<div class="decs">
		    		<p class="name font-weight-bold">${user.name}</p>
		    		<p class="email">${user.email}</p>		    		
		    	</div>
	    	</div>
	    	<form:form method="POST" modelAttribute="user" class="form-update" action="${contextPath}/update">
				<spring:bind path="username">
					<form:input readonly="true" type="hidden" path="username" class="form-control"  id="username" placeholder="Username"></form:input>
				</spring:bind>
				<spring:bind path="mobilephone">
					<div class="form-group ">
						<label for="mobilephone">Mobile Phone Number</label>
						<div class="input-group mb-2">
					        <div class="input-group-prepend">
					          <div class="input-group-text"><i class="fas fa-mobile-alt"></i></div>
					        </div>
							<form:input type="number" path="mobilephone" class="form-control"  id="mobilephone" placeholder="Mobile Phone"></form:input>
					     </div>
					</div>
				</spring:bind>
				<div class="form-group input-group">
					<label for="mobilephone">Global Phone Number</label>
					<div class=" input-group">						
				    	<div class="input-group-prepend">
						    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
						</div>
						<select class="custom-select" style="max-width: 80px;">
						    <option selected="true">+971</option>
						    <option value="1">+60</option>
						    <option value="2">+84</option>
						    <option value="3">+01</option>
						</select>
				    	<input name="" class="form-control" placeholder="Phone number" type="number">
					</div>
			    </div>
				<spring:bind path="telephone">
					<div class="form-group ">
						<label for="telephone">Telephone Number</label> 
						<div class="input-group mb-2">
					        <div class="input-group-prepend">
					          <div class="input-group-text"><i class="fas fa-phone"></i></div>
					        </div>
							<form:input type="number" path="telephone" class="form-control"  id="telephone" placeholder="Telephone"></form:input>
					     </div>
					</div>
				</spring:bind><spring:bind path="address">
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
					<button id="submit" type="submit" class="btn btn-lg btn-primary btn-block submit" >Submit</button>				
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
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
 <c:url value="/js/bootstrap.min.js" var="bootstrapJs" />
 <script src="${bootstrapJs}"></script>
 <c:url value="/js/main.js" var="mainJs" />
  <script src="${mainJs}"></script>
</body>
</html>
