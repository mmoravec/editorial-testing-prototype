{% extends 'main-layout.swig' %}
{% block content %}
<div class="row">
	<div class="col-md-12">
		
		<div class="panel panel-primary" data-collapsed="0">
		
			<div class="panel-heading">
				<div class="panel-title">
					New Account
				</div>
			</div>
			
			<div class="panel-body">
				
				<form role="form" class="form-horizontal form-groups-bordered">
	
					<div class="form-group">
						<label for="accountName" class="col-sm-3 control-label">Account Name</label>
						
						<div class="col-sm-5">
							<input type="text" class="form-control" id="accountName" placeholder="Account Name">
						</div>
					</div>

					<div class="form-group">
						<label for="apiToken" class="col-sm-3 control-label">API Token</label>
						
						<div class="col-sm-5">
							<input type="text" class="form-control" id="apiToken" placeholder="API Token">
						</div>
					</div>
					
					<div class="form-group">
						<div class="col-sm-offset-3 col-sm-5">
							<button type="submit" class="btn btn-default">Create</button>
						</div>
					</div>
				</form>
				
			</div>
		
		</div>
	
	</div>
</div>
{% endblock %}