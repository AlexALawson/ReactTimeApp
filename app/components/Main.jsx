var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
		return(
		<div>
		<Col xs={12} md={8}/>
		<Nav/>
		<h2>Main Component</h2>
		{props.children}
		</div>
		);
	};

module.exports = Main; 