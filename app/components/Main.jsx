var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');

var Main = (props) => {
		return(
		<div>
		<Nav/>
		<div className="row">
			<p>Main.jsx rendered</p>
			{props.children}
			<Clock/>
			</div>
		</div>
		);
	};

module.exports = Main;
