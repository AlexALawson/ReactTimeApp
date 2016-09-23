var React = require('react'); 

var About = (props) => {
	return (
	<div>
	<h1 className='text-center'>About </h1>
	<p>This app was created using <a href='https://facebook.github.io/react/' target="_blank">React.JS</a> and 
	<a href='https://openweathermap.org/' target="_blank">Open Weather Map API</a>. To see the GitHub docs for this app,
	 go to <a href='https://github.com/boots525/React-Weather' target="_blank"> React Weather: Github</a>. 
	 </p> <p>
	 This app was created by <a href='http://alexlawson.tech' target="_blank">Alex Lawson</a>, a Full Stack JavaScript developer based in South Florida</p>	
	</div>
	)
};

module.exports = About; 