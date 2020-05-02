import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styles from './service.module.scss';

import {
	IconServiceSettings,
	IconServiceGroup,
	IconServiceBusiness,
} from '../Icons';

const mapStateToProps = (state) => {
	return {
		browser: state.browser,
	};
};

const mapDispatchToProps = null;

type Props = {
	browser: Object,
};

class Service extends PureComponent<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const { is } = this.props.browser;
		const isDesktop = is.desktop || is.infinity;
		const width = isDesktop ? '64' : '32';
		return (
			<div className={styles.service}>
				<div className={styles.serviceDesk}>
					<h1>Integer bibendum sit amet arcu vel egestas.</h1>
					<div className={styles.serviceBoxes}>
						<div className={styles.serviceBox}>
							<IconServiceGroup fill='#fc4c02' width={width} />
							<p>Service Name</p>
						</div>
						<div className={styles.serviceBox}>
							<IconServiceBusiness fill='#fc4c02' width={width} />
							<p>Service Name</p>
						</div>
						<div className={styles.serviceBox}>
							<IconServiceSettings fill='#fc4c02' width={width} />
							<p>Service Name</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Service);
