import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark d-flex justify-content-center border-bottom box-shadow">
			  <h4 className="text-white">React Calculator by Matthew Olivetti</h4>
			</nav>
		)
	}
}

export default Header