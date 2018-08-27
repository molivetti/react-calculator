import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
			<button value={this.props.value} className="btn btn-light rounded-0 h-100 w-100" type="button" onClick={this.props.clickHandler}>{this.props.label}</button>
		)
	}
}

export default Button;