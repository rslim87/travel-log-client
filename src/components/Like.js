import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Like extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		}
	}

	handleLikeClick = (event) => {
		event.preventDefault();
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render() {
		return (
			<Button onClick={this.handleLikeClick}>Like {this.state.counter}</Button>
		);
	}

}




export default Like 