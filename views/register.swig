{% extends 'auth-layout.swig' %}
{% block headerText %}Create an account, it's free and takes few moments only!{% endblock %}
{% block bottomScript %}<script src="/js/neon-register.js"></script>{% endblock %}
{% block content %}
	<form method="post" role="form" id="form_register">
					
		<div class="form-register-success">
			<i class="entypo-email"></i>
			<h3>You have been successfully registered.</h3>
			<p>We have emailed you the confirmation link for your account.</p>
		</div>
		
		<div class="register-group">
			<div class="form-group">
				
				<div class="input-group">
					<div class="input-group-addon">
						<i class="entypo-mail"></i>
					</div>
					
					<input type="text" class="form-control" name="email" id="email" placeholder="Email" autocomplete="off" />
				</div>
				
			</div>
			
			<div class="form-group">
				
				<div class="input-group">
					<div class="input-group-addon">
						<i class="entypo-key"></i>
					</div>
					
					<input type="password" class="form-control" name="password" id="password" placeholder="Password" autocomplete="off" />
				</div>
			
			</div>

			<div class="form-group">
				
				<div class="input-group">
					<div class="input-group-addon">
						<i class="entypo-key"></i>
					</div>
					
					<input type="password" class="form-control" name="password" id="password" placeholder="Password" autocomplete="off" />
				</div>
			
			</div>
			
			<div class="form-group">
				<button type="submit" class="btn btn-primary btn-block btn-login">
					<i class="entypo-login"></i>
					Register
				</button>
			</div>
		</div>
		
	</form>


	<div class="login-bottom-links">
		
		<a href="/login" class="link">
			<i class="entypo-lock"></i>
			Return to Login Page
		</a>
		
		<br />
		
		<a href="#">ToS</a>  - <a href="#">Privacy Policy</a>
		
	</div>
{% endblock %}