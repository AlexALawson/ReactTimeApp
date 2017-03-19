var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
		return(
		<div>
		<Nav/>
		<div className="row">
			<p>Main.jsx rendered</p>
			{props.children}
			</div>
		</div>
		);
	};

module.exports = Main;
