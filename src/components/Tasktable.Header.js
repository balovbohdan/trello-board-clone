/** @flow */

import ReactComponent from './ReactComponent';
import * as React from 'react';
import styles from '../css/components/Tasktable.Header.css';
import classNames from 'classnames';

export default class extends ReactComponent {
	render() {
		return (
			<header className={styles.main}>
				<div className={classNames(styles.part, styles.leftPart)}>
					<div className={classNames(styles.partItem, styles.buttonedPartItem, styles.boardsBtn)}>
						<img src='/assets/icons/board-1.svg' alt='Board' />
						Boards
					</div>

					<div className={classNames(styles.partItem, styles.buttonedPartItem, styles.searchItem)}>
						<input type='text' maxlength='30' />
						<img src='/assets/icons/search-1.svg' alt='Search' />
					</div>
				</div>
				<div className={classNames(styles.part, styles.centerPart)}>
					<div className={classNames(styles.partItem)}>
						<img src='/assets/icons/board-1.svg' alt='Board' />
					</div>
				</div>
				<div className={classNames(styles.part, styles.rightPart)}>
					<div className={classNames(styles.partItem, styles.buttonedPartItem)}>
						<img src='/assets/icons/plus-1.svg' alt='Plus' />
					</div>
					<div className={classNames(styles.partItem, styles.buttonedPartItem)}>
						<img src='/assets/icons/info-1.svg' alt='Info' />
					</div>
					<div className={classNames(styles.partItem, styles.buttonedPartItem)}>
						<img src='/assets/icons/bell-1.svg' alt='Bell' />
					</div>
					<div className={classNames(styles.partItem, styles.avatar)}></div>
				</div>
			</header>
		);
	}
};