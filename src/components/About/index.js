import React, { PureComponent } from 'react';
import styles from './about.module.scss';
import world from '../../assets/images/world.jpg';

class About extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.about}>
				<div className={styles.aboutText}>
					<h1>
						Mauris id bibendum est. Proin dapibus sollicitudin iaculis, Maecenas
						condimentum maximus laoreet.
					</h1>
					<p>
						In maximus euismod egestas. Fusce tincidunt posuere est non
						elementum. Vivamus tincidunt eleifend nisl et gravida. Aenean in
						lorem ultrices, pellentesque augue eu, mattis est. Praesent sed
						volutpat nibh. Morbi faucibus tortor sed neque vulputate hendrerit.
						Sed aliquam mattis purus eleifend consectetur. Nulla mollis non enim
						non tempus.
					</p>
				</div>
				<div className={styles.aboutImage}>
					<img src={world} width='100%' />
				</div>
			</div>
		);
	}
}

export default About;
