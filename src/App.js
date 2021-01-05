import Header from './header/Header';
import PageContent from './PageContent';

import './App.css';

// function App() {
// 	return (
		
// 	);
// }

// export default App;


import React, { Component } from 'react'

export class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<PageContent />
			</div>
		);
	}
}

export default App;
