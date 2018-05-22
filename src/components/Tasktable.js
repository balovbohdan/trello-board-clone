/** @flow */

import * as React from 'react';
import ReactComponent from './ReactComponent';
import Header from './Tasktable.Header';
import Body from './Tasktable.Body';
import styles from '../css/components/Tasktable.css';

export default class Tasktable extends ReactComponent {
	render() {
		return (
			<div className={styles.main}>
				<Header />
				<Body />
			</div>
		);
	}
};