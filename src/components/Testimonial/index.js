import classnames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './testimonial.module.scss';
import { IconDoubleQuotes, IconUsers } from '../Icons';

class Service extends PureComponent {
	constructor(props) {
		super(props);
	}

	renderTestimonials(text) {
		return (
			<div className={styles.testimonialBox}>
				<div
					className={classnames(
						styles.talkBubble,
						styles.triRight,
						styles.btmLeftIn
					)}
				>
					<div className={styles.talkText}>
						<IconDoubleQuotes fill='#fc4c02' height='32' width='32' />
						<span>{text}</span>
					</div>
				</div>
				<div className={styles.userBox}>
					<IconUsers fill='#fc4c02' height='64' width='64' />
					<div className={styles.userInfo}>
						<h3>Client Name</h3>
						<span>
							Position, <h5>Org</h5>
						</span>
					</div>
				</div>
			</div>
		);
	}

	render() {
		const testimonial1 =
			'When it comes to creating professional, attractive, and effective websites, there is no company that can surpass Axelerant. Thanks to their talent, our site has taken off in the search engines like a rocket.';
		const testimonial2 =
			'When it comes to creating professional, attractive, and effective websites, there is no company that can surpass Axelerant. Thanks to their talent, our site has taken off in the search engines like a rocket. In this day and age, it is impossible to get ahead as a business without the support of gurus like Axelerant standing behind you.';

		const testimonial3 =
			'When it comes to creating professional, attractive, and effective websites, there is no company that can surpass Axelerant. Thanks to their talent, our site has taken off in the search engines like a rocket. ';
		return (
			<div className={styles.testimonial}>
				<h1>Testimonials</h1>
				<div className={styles.testimonialBoxes}>
					{this.renderTestimonials(testimonial1)}
					{this.renderTestimonials(testimonial2)}
					{this.renderTestimonials(testimonial3)}
				</div>
			</div>
		);
	}
}

export default Service;
