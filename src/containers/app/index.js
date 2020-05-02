import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Error from '../../components/Error';
import Router from '../../router';
import styles from './app.module.scss';

const mapStateToProps = null;

const mapDispatchToProps = null;

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.app}>
				<Error>
					<Header />
					<Router />
					<Footer />
				</Error>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
