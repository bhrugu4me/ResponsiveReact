import React, { PureComponent } from 'react';
import styles from './contactus.module.scss';
import A11yButton from '../A11yButton';

class ContactUs extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.contact}>
				<div className={styles.contactUS}>
					<h1>Convinced To Work With Us?</h1>
					<h3>
						Company has helped agencies keep their promises to client since
						2005.
					</h3>
					<div className={styles.contactDiv}>
						<div className={styles.contactForm}>
							<input className={styles.text} placeholder='Fullname' />
							<input className={styles.text} placeholder='Email Address' />
							<input className={styles.text} placeholder='Phone Number' />
						</div>
						<div className={styles.contactForm}>
							<textarea
								className={styles.textarea}
								placeholder='Message in brief'
							/>
						</div>
					</div>
					<div className={styles.submitDiv}>
						<A11yButton className={styles.submit}>Submit</A11yButton>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUs;
