import classnames from 'classnames';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import style from './footer.module.scss';
import appStyle from '../../containers/app/app.module.scss';

import {
	IconFaceBook,
	IconLinkedIn,
	IconTwitter,
	IconMail,
} from '../../components/Icons';

const mapStateToProps = (state) => {
	return {
		browser: state.browser,
	};
};
const mapDispatchToProps = null;

type Props = {
	browser: Object,
};

class Footer extends PureComponent<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const { is } = this.props.browser;
		const isDesktop = is.desktop || is.infinity;
		const width = isDesktop ? '32' : '16';
		return (
			<div className={style.footer}>
				<div className={style.footer__container}>
					<div className={classnames(appStyle.column, style.valign)}>
						<div className={style.leftAlign}>
							&#169;2017 Company, All Rights Reserved
						</div>
					</div>
					<div className={classnames(appStyle.column, style.valign)}>
						<div className={style.rightAlign}>
							<div>Follow us on: &nbsp;</div>
							<IconFaceBook fill='#ccc' width={width} />
							<IconLinkedIn fill='#ccc' width={width} />
							<IconTwitter fill='#ccc' width={width} />
							<IconMail fill='#ccc' width={width} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
