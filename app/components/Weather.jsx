var React = require('react'); 
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){
		var that = this; 

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({
				location: location, 
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage){
			that.setState({isLoading: false});
			alert(errorMessage);
		});
	},
	render: function() {
	var {isLoading, location, temp} = this.state; 

	function renderMessage(){
		if(isLoading){
			return <h3 className="text-center">Fetching Weather...</h3>;
		} else if (temp && location) {
			return <WeatherResult temp={temp} location={location} />;
		}
	}
		return (
		<div>	
			<h1 className="text-center">Get Weather</h1>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderMessage()}
		</div>
		);
	}
});

module.exports = Weather; 


// Source Map Library Issue
// Section 5, Lecture 37
// Due to a library bug there is a small issue in the next video. In the next lecture you'll learn how to setup source maps by setting a "devtool" property in webpack.config.js. In the lecture I set the value to "cheap-module-eval-source-map". This might cause the source maps to not work as shown in the video.

// If you are getting this error, try setting the value to either "inline-source-map" or "eval-source-map" instead.

// As always, I'm here if you run into any issue or have any questions. 

