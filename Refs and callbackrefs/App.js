
import React, {Component} from 'react';
import './App.css';
import RefsDemo from './RefsDemo';
import CallBackRefs from './CallBackRefs';

class App extends Component {
	render() {
		return(
			<div className="App">
				<h1>Creating Refs</h1>
				<RefsDemo/>
				<h1>Creating Call back refs</h1>
				<CallBackRefs/>

			</div>
			)
	}
}
export default App;
