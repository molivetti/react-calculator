import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leftOperand: "",
			operator: "",
			rightOperand: [],
			expression: ""
		};
	}

	isOperand(input) {
		return /[0-9]/.test(input)
	}
	isOperator(input) {
		return /[+\-*/]/.test(input)
	}

	handleClickEvent = e => {
		const clicked = e.target.value
		e.target.blur()
		this.handleInput(clicked)
	}

	handleKeyDownEvent = e => {
		const keyPressed = e.key
		this.handleInput(keyPressed)
	}

	handleInput(newInput) {
		if(this.isOperand(newInput)){
			this.setState((prevState) => ({
				rightOperand: [...prevState.rightOperand, newInput]
			}))
		}

		if(newInput === "." && !this.state.rightOperand.join("").includes(".")){
			this.setState((prevState) => ({
				rightOperand: [...prevState.rightOperand, newInput]
			}))
		}
		
		if(this.isOperator(newInput)){
			if(this.state.rightOperand.length !== 0){
				this.setState((prevState) => ({
					leftOperand: eval(prevState.leftOperand + prevState.operator + prevState.rightOperand.join("")),
					rightOperand: [],
					expression: prevState.expression + prevState.operator + prevState.rightOperand.join("")
				}))
			}
			this.setState((prevState) => ({
				operator: newInput
			}))
		}

		if(newInput === "%" && this.state.leftOperand !== "" && this.state.operator !== ""){
			this.setState((prevState) => ({
				rightOperand: [eval(prevState.leftOperand+"*"+prevState.rightOperand.join("")+"/100")]
			}))
		}

		if(newInput === "Squareroot" && this.state.rightOperand.length !== 0){
			this.setState((prevState) => ({
				rightOperand: [eval("Math.sqrt("+prevState.rightOperand.join("")+")")]
			}))
		}

		if(newInput === "Backspace"){
			this.setState((prevState) => ({
				rightOperand: prevState.rightOperand.slice(0,-1)
			}))
		}

		if(newInput === "C"){
			this.setState({
				leftOperand: "",
				operator: "",
				rightOperand: [],
				expression: ""
			})
		}

		if(newInput === "Enter"){
			this.setState((prevState) => ({
				leftOperand: "",
				operator: "",
				rightOperand: [eval(prevState.leftOperand + prevState.operator + prevState.rightOperand.join(""))],
				expression: ""
			}))
		}
	}

  render() {
    return (
	    <div className="App container">
	      <div className="row justify-content-center mt-5">
	      	<div className="col-3 calculator bg-secondary rounded py-2">  	
		      	<div onKeyDown={this.handleKeyDownEvent}>
		      		<Display history={this.state.expression + this.state.operator} activeInput={this.state.rightOperand.join("")} />	
		      	</div>
		      	<div className="buttons">
		      		<Button label="⟵" value="Backspace" clickHandler={this.handleClickEvent} />
			      	<Button label="C" value="C" clickHandler={this.handleClickEvent} />

		    			<Button label="7" value="7" clickHandler={this.handleClickEvent} />
		    			<Button label="8" value="8" clickHandler={this.handleClickEvent} />
		    			<Button label="9" value="9" clickHandler={this.handleClickEvent} />
		    			<Button label="÷" value="/" clickHandler={this.handleClickEvent} />
		    			<Button label="√" value="Squareroot" clickHandler={this.handleClickEvent} />
		    			
		    			<Button label="4" value="4" clickHandler={this.handleClickEvent} />
		    			<Button label="5" value="5" clickHandler={this.handleClickEvent} />
		    			<Button label="6" value="6" clickHandler={this.handleClickEvent} />
		    			<Button label="x" value="*" clickHandler={this.handleClickEvent} />
		    			<Button label="%" value="%" clickHandler={this.handleClickEvent} />
		    			
		    			<Button label="1" value="1" clickHandler={this.handleClickEvent} />
		    			<Button label="2" value="2" clickHandler={this.handleClickEvent} />
		    			<Button label="3" value="3" clickHandler={this.handleClickEvent} />
		    			<Button label="-" value="-" clickHandler={this.handleClickEvent} />
		    			
		    			<Button label="0" value="0" clickHandler={this.handleClickEvent} />
		    			<Button label="." value="." clickHandler={this.handleClickEvent} />
		    			<Button label="+" value="+" clickHandler={this.handleClickEvent} />
		    			<Button label="=" value="Enter" clickHandler={this.handleClickEvent} />
			    	</div>
			    </div>
				</div>
	    </div>
    );
  }
}

export default App;
