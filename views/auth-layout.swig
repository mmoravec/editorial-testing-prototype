<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Neon Admin Panel" />
	<meta name="author" content="" />

	<title>Neon | Login</title>

	{% if config.environment == 'local'%}
		<link rel="stylesheet" href="/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css">
		<link rel="stylesheet" href="/css/font-icons/entypo/css/entypo.css">
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic">
		<link rel="stylesheet" href="/css/bootstrap.css">
		<link rel="stylesheet" href="/css/neon-core.css">
		<link rel="stylesheet" href="/css/neon-theme.css">
		<link rel="stylesheet" href="/css/neon-forms.css">
		<link rel="stylesheet" href="/css/custom.css">
		<link rel="stylesheet" href="/css/skins/white.css">
	{% else %}
		<link rel="stylesheet" href="/css/main.min.css">
	{% endif %}

	<script src="/js/jquery-1.11.0.min.js"></script>
	<script>$.noConflict();</script>

	<!--[if lt IE 9]><script src="assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->


</head>
<body class="page-body login-page login-form-fall" data-url="http://neon.dev">


<!-- This is needed when you send requests via Ajax -->
<script type="text/javascript">
var baseurl = '';
</script>

<div class="login-container">
	
	<div class="login-header login-caret">
		
		<div class="login-content">
			
			<a href="index.html" class="logo">
				<img src="/images/logo@2x.png" width="120" alt="" />
			</a>
			
			<p class="description">{% block headerText %}{% endblock %}</p>
			
			<!-- progress bar indicator -->
			<div class="login-progressbar-indicator">
				<h3>43%</h3>
				<span>logging in...</span>
			</div>
		</div>
		
	</div>
	
	<div class="login-progressbar">
		<div></div>
	</div>
	
	<div class="login-form">
		
		<div class="login-content">
			
			{% block content %}{% endblock %}
			
		</div>
		
	</div>
	
</div>


	<!-- Bottom scripts (common) -->
	<script src="/js/gsap/main-gsap.js"></script>
	<script src="/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js"></script>
	<script src="/js/bootstrap.js"></script>
	<script src="/js/joinable.js"></script>
	<script src="/js/resizeable.js"></script>
	<script src="/js/neon-api.js"></script>
	<script src="/js/jquery.validate.min.js"></script>
	{% block bottomScript %}{% endblock %}
	<script src="/js/jquery.inputmask.bundle.min.js"></script>
	<!-- JavaScripts initializations and stuff -->
	<script src="/js/neon-custom.js"></script>
	<!-- Demo Settings -->
	<script src="/js/neon-demo.js"></script>

</body>
</html>