var React = require('react'); 

var WeatherResult = ({temp, location}) => {	
		return (
		<div>
		<h3>It's {temp} in {location}</h3>
		</div>
		);
	};

module.exports = WeatherResult; 