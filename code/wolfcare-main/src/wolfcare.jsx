import React from 'react';
import { Provider } from 'react-redux';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';

/**
 * Root component to connect child components with redux store and render them
 * @extends React.Component
 */
class Wolfcare extends React.Component {
	/**
	 * Create and return a router to render the respective component based on the path in URL
	 * @returns {React.Component} Router with respective component subscribed to the shared redux store
	 * <br/>
	 */
	render() {
		return (
			<div>
				<header style={{backgroundColor: '#a40313', color: 'white'}}>
					<img style={{height: '40px',  width: '40px', position: 'relative', top: '-6px'}} src='../public/wolf.png' alt='test'></img>
					WOLF CARE
				</header>
			</div>
		)
	}
}

export default Wolfcare;
