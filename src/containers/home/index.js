import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './home.module.scss';
import Service from '../../components/Service';
import About from '../../components/About';
import Testimonial from '../../components/Testimonial';
import ContactUs from '../../components/ContactUs';

const mapStateToProps = (state) => {
	return {
		browser: state.browser,
	};
};

const mapDispatchToProps = null;

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.home}>
				<Service />
				<About />
				<Testimonial />
				<ContactUs />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
