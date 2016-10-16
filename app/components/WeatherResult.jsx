var React = require('react'); 


var WeatherResult = ({temp, location}) => {	
		return (
		<div>
		<h3 className='text-center'>It's {temp}°F in {location}</h3>
		</div>
		);
	};

module.exports = WeatherResult; 

