{% extends 'main-layout.swig' %}
{% block content %}

<div class="row">					
	<div class="col-sm-3">
		<select name="project" class="selectboxit">
			<optgroup label="Projects">
				<option value="1">Project 1</option>
				<option value="2">Project 2</option>
				<option value="3">Project 3</option>
				<option value="4">Project 4</option>
				<option value="5">Project 5</option>
			</optgroup>
		</select>
	</div>

	<div class="col-sm-3">
		<select name="goal" class="selectboxit">
			<optgroup label="Goals">
				<option value="1">Total Revenue</option>
				<option value="2">Goal 2</option>
				<option value="3">Goal 3</option>
				<option value="4">Goal 4</option>
				<option value="5">Goal 5</option>
			</optgroup>
		</select>
	</div>

	
</div>
<br/>
<div class="row">
	<div class="col-sm-5">
		<div id="reportrange" data-page="goals" class="pull-left" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc">
          <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
          <span></span> <b class="caret"></b>
       </div>

	</div>
</div>

<div class="row">
	<div class="tab-pane active" id="line-chart">
		<div id="line-chart-demo" class="morrischart" style="height: 300px"></div>
	</div>
</div>

<br />


<div class="row">
	<div class="col-sm-12">

		<table class="table table-bordered datatable" id="table-4">
			<thead>
				<tr>
					<th>Experiment Name</th>
					<th>W/L Variation</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Dates Ran</th>
					<th>Visitors</th>
					<th>Conversions</th>
					<th>Conversion Rate</th>
					<th>Baseline</th>
					<th>Improvement</th>
				</tr>
			</thead>
			<tbody>
				{% set array = [1,2,3,4,5,6,7,8,9,10] %}
				{% for x in array %}
					<tr class="odd gradeX">
						<td><a href="#">Experiment {{x}}</td>
						<td><a href="#">Variation {{x}}</a></td>
						<td>May 4th, 2015</td>
						<td>May 10th, 2015</td>
						<td class="center">6</td>
						<td class="center">40000</td>
						<td class="center">2560</td>
						<td class="center">6.4%</td>
						<td class="center">4.6%</td>
						<td class="center">71%</td>
					</tr>
				{% endfor %}
			</tbody>
			<tfoot>
				<tr>
					<th>Experiment Name</th>
					<th>W/L Variation</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Dates Ran</th>
					<th>Visitors</th>
					<th>Conversions</th>
					<th>Conversion Rate</th>
					<th>Baseline</th>
					<th>Improvement</th>
				</tr>
			</tfoot>
		</table>	
	</div>
</div>
<script src="/js/goals-list.js"></script>
{% endblock %}