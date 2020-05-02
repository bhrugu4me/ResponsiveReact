import classnames from 'classnames';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import style from './header.module.scss';
import appStyle from '../../containers/app/app.module.scss';
import A11yButton from '../A11yButton';
import { IconChat, IconLogo, IconMenu } from '../../components/Icons';

const mapStateToProps = (state) => {
	return {
		browser: state.browser,
	};
};

const mapDispatchToProps = null;

type Props = {
	browser: Object,
};

class Header extends PureComponent<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const { is } = this.props.browser;
		const isDesktop = is.desktop || is.infinity;

		return (
			<div className={style.header}>
				<div className={style.header__container}>
					{isDesktop && (
						<div className={appStyle.row}>
							<div className={appStyle.column}>
								<div className={style.header_logo}>
									<IconLogo height='68' width='100' />
								</div>
							</div>
							<div className={classnames(appStyle.column, style.valign)}>
								<div className={style.header_menu}>
									<div>About</div>
									<div>Services</div>
									<div>Solutions</div>
									<div>Blog</div>
									<div>
										<A11yButton className={style.chat}>
											<IconChat fill='#fff' width='32px' height='32px' />
											<span>Get In Touch</span>
										</A11yButton>
									</div>
								</div>
							</div>
						</div>
					)}
					{!isDesktop && (
						<div className={style.header_mobile}>
							<IconMenu fill='#fff' height='32px' width='32px' />
							<IconLogo height='68' width='100' />
							<IconChat fill='#fff' width='32px' height='32px' />
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
