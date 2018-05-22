import React from 'react';
import ReactDOM from 'react-dom';
import Tasktable from './components/Tasktable';

window.onload = () => {
	ReactDOM.render(
		<Tasktable />,
		document.getElementById('app')
	);
};