import React, { Component } from 'react';

class Display extends Component {
	render() {
		return (
			<div className="display">
				<div className="form-control form-control-sm border-0 rounded-0 bg-dark text-white text-right">{this.props.history}</div>
				<input autoFocus className="form-control form-control-lg border-0 rounded-0 bg-dark text-white text-right" value={this.props.activeInput} onChange={event => event.preventDefault()}/>
			</div>
		)
	}
}

export default Display