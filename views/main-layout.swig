<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Neon Admin Panel" />
	<meta name="author" content="" />

	<title>Neon | Dashboard</title>

	{% if config.environment == 'local'%}
    <title>Optimizely – Editorial Testing CMS-Prototype</title>
    <!-- Local CSS -->
    <link rel="stylesheet" href="css/lego.css">
    <link rel="stylesheet" href="css/codemirror.css">
    <link rel="stylesheet" href="css/custom.css">
	{% else %}
		<link rel="stylesheet" href="/css/main.min.css">
	{% endif %}

	<!--[if lt IE 9]><script src="/js/ie8-responsive-file-warning.js"></script><![endif]-->

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->


</head>
<body class="page-body page-fade">

    <header id="header" class="header">
        <span class="display--inline-block" href="/">
            <img src="images/optimizely-white.svg" alt="Optimizely" id="logo" width="400px">
        </span>
    </header>
    <div class="content">
        <div id="step_configure" class="step">
            <h1>Configure this tool for your site</h1>
            <form>
                <fieldset>
                    <ol class="lego-form-fields">
                        <li class="lego-form-field__item">
                            <label class="lego-label">Experiment Template (in JSON format)</label>
                            <textarea type="text" class="configuration lego-text-input" id="configuration"></textarea>
                            <div class="lego-form-note">Paste in the experiment template (in JSON format) you’d like to use. You can find a boiletplate template in this <a href="">GitHub repository</a>.</div>
                        </li>
                    </ol>
                </fieldset>
                <div class="lego-form__footer lego-button-row lego-button-row--right">
                    <!--button class="cancel lego-button">Cancel</button-->
                    <button class="save lego-button lego-button--highlight">Save</button>
                </div>
            </form>
        </div>
        <div id="step_connect" class="step">
            <h1>Login and connect your Optimizely account</h1>
            <p>To create a new experiment, please connect to your Optimizely account. Your session will be valid for 10 minute after login.</p>
            <p><img src="images/connect-optimizely.svg" alt="Connect with Optimizely" id="connect_to_optly"></p>
        </div>
        <div id="step_experiment" class="step">
            <div class="float--right">
                <svg class="lego-icon" id="settings_icon" v-poptip data-dir="bottom-right" data-content="Experiment Template Settings (Advanced)">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#settings"></use>
                </svg>
            </div>
            <h1>Create an experiment</h1>
            <form>
                <div class="lego-form__header">
                    <div class="lego-form__title">Experiment-level details</div>
                </div>
                <fieldset>
                    <ul class="lego-form-fields" id="experiment-level">
                        
                    </ul>
                </fieldset>
                <div class="lego-form__header">
                    <div class="lego-form__title">Variation-level details</div>
                </div>
                <fieldset>
                    <ul class="lego-form-fields" id="variation-level">
                        
                    </ul>
                </fieldset>
                <div class="lego-form__footer lego-button-row lego-button-row--right">
                    <button class="lego-button">Cancel</button>
                    <input type="submit" class="lego-button lego-button--highlight" value="Continue">
                </div>
            </form>
        </div>
    </div>
    <div id="overlay" class=" text--center">
        <div class="content">
            <div class="lego-spinner-wrap">
                <div class="lego-spinner"></div>
            </div>
            <h2 id="status"></h2></div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/lego.min.js"></script>
    <script src="js/codemirror.js"></script>
    <script src="https://api.filepicker.io/v2/filepicker.js"></script>
    <script src="js/optimizely-framework.js"></script>
    <script src="js/custom.js"></script>
    <!-- Icon repository -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="settings" viewBox="0 0 32 32">
            <path d="M30.8 13.5l-3.1-.5c-.2-.9-.6-1.8-1-2.6l2-2.5c.4-.5.4-1.3 0-1.8l-1.2-1.4c-.5-.6-1.3-.7-1.8-.3L23 6.1c-1.2-.8-2.5-1.4-4-1.8l-.5-3.1C18.4.5 17.8 0 17.2 0h-1.9c-.7 0-1.3.5-1.4 1.2l-.5 3.1c-1.2.3-2.3.8-3.3 1.4L7.5 3.9c-.5-.4-1.3-.4-1.8.1L4.4 5.3c-.5.5-.5 1.3-.1 1.8l1.8 2.6c-.6 1-1.1 2.1-1.4 3.3l-3.2.5c-.7.1-1.2.7-1.2 1.4v1.9c0 .7.5 1.3 1.2 1.4l3.2.5c.2 1 .6 1.9 1 2.8l-2 2.5c-.4.5-.4 1.3 0 1.8l1.2 1.4c.5.5 1.2.6 1.8.3l2.7-1.7c1.1.8 2.4 1.4 3.8 1.7l.5 3.1c.1.7.7 1.2 1.4 1.2H17c.7 0 1.3-.5 1.4-1.2l.5-3.1c1.2-.3 2.3-.7 3.3-1.4l2.7 1.9c.5.4 1.3.3 1.8-.1l1.3-1.3c.5-.5.5-1.2.1-1.8l-1.9-2.6c.6-1 1.1-2.1 1.4-3.3l3.1-.5c.7-.1 1.2-.7 1.2-1.4v-1.9c.1-.9-.4-1.5-1.1-1.6zm-14.6 8.2c-3.3 0-5.9-2.7-5.9-5.9 0-3.3 2.7-5.9 5.9-5.9 3.3 0 5.9 2.7 5.9 5.9.1 3.3-2.6 5.9-5.9 5.9z" />
        </symbol>
    </svg>

	{% if config.environment == 'local'%}

	{% else %}
		<script src="/js/main.min.js"></script>
	{% endif %}

</body>
</html>