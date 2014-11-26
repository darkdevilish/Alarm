<!doctype html>
<html>
	<head>
		<title>Anthony's Alarm</title>
		<meta charset="utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<div id='alarm'>
			<div>
				<canvas id="canvas" width="350" height="350"></canvas>
			</div>
			HOURS<input id="hours" type="number" name="hour" min="0" max="24"	>
			MINUTES<input id="minutes" type="number" name="minutes" min="0" max="59">
			<input id="switch_button" type="button" name="switch_button" value="OFF">
		</div>
		<!--So canvas doesn't throw an error -->
		<script src="alarm.js"></script>
	</body>
</html>
