{% extends 'main-layout.swig' %}
{% block content %}
<div class="row">
	<div class="col-sm-3 col-xs-6">

		<div class="tile-stats tile-red">
			<div class="icon"><i class="entypo-users"></i></div>
			<div class="num" data-start="0" data-end="42000" data-postfix="" data-duration="1500" data-delay="0">0</div>

			<h3>Unique Visitors</h3>
			<p>total visitors shown experiments</p>
		</div>

	</div>

	<div class="col-sm-3 col-xs-6">

		<div class="tile-stats tile-aqua">
			<div class="icon"><i class="fa fa-flask"></i></div>
			<div class="num" data-start="0" data-end="22" data-postfix="" data-duration="1500" data-delay="600">0</div>

			<h3>Experiments Ran</h3>
			<p>total number of experiments ran</p>
		</div>

	</div>

	<div class="col-sm-3 col-xs-6">

		<div class="tile-stats tile-green">
			<div class="icon"><i class="fa fa-money"></i></div>
			<div class="num" data-start="0" data-end="42000" data-prefix="$" data-postfix=".00"data-duration="1500" data-delay="1200">0</div>

			<h3>Total Revenue</h3>
			<p>total revenue generated</p>
		</div>

	</div>

	<div class="col-sm-3 col-xs-6">

		<div class="tile-stats tile-blue">
			<div class="icon"><i class="fa fa-line-chart"></i></div>
			<div class="num" data-start="0" data-end="6.5" data-postfix="%" data-duration="1500" data-delay="1800">0</div>

			<h3>Average lift</h3>
			<p>average lift conversion</p>
		</div>

	</div>
</div>

<br />

<div class="row">					
	<div class="col-sm-3">
		<select name="project" class="selectboxit">
			<optgroup label="Projects">
				<option value="1">All Projects</option>
				<option value="1">Project 1</option>
				<option value="2">Project 2</option>
				<option value="3">Project 3</option>
				<option value="4">Project 4</option>
				<option value="5">Project 5</option>
			</optgroup>
		</select>
	</div>

	<div class="col-sm-5">
		<div id="reportrange" data-page="goals" class="pull-left" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc">
          <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
          <span></span> <b class="caret"></b>
       </div>

	</div>
</div>

<br />

<div class="row">
	<div class="col-sm-12">

		<table class="table table-bordered datatable" id="table-4">
			<thead>
				<tr>
					<th>Experiment Name</th>
					<th>Project Name</th>
					<th>Status</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Dates Ran</th>
					<th>Visitors</th>
					<th>Avg Lift Per Goal</th>
					<th>Results</th>
				</tr>
			</thead>
			<tbody>
				{% set array = [1,2,3,4,5,6,7,8,9,10] %}
				{% for x in array %}
					<tr class="odd gradeX">
						<td><a href="#">Experiment {{x}}</td>
						<td><a href="#">Project {{x}}</a></td>
						<td>Running</td>
						<td>May 4th, 2015</td>
						<td>May 10th, 2015</td>
						<td class="center">6</td>
						<td class="center">40000</td>
						<td class="center">5.6%</td>
						<td class="center"><a href="#">Results</a></td>
					</tr>
				{% endfor %}
			</tbody>
			<tfoot>
				<tr>
					<th>Experiment Name</th>
					<th>Project Name</th>
					<th>Status</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Dates Ran</th>
					<th>Visitors</th>
					<th>Avg Lift Per Goal</th>
					<th>Results</th>
				</tr>
			</tfoot>
		</table>	
	</div>
</div>
<script src="/js/experiment-list.js"></script>
{% endblock %}