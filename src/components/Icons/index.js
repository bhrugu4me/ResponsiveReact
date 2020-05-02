import React from 'react';
import Users from './users';
import Loading from './loading';
import Chat from './chat';
import Facebook from './facebook';
import LinkedIn from './linkedIn';
import Twitter from './twitter';
import Mail from './mail';
import Logo from './logo';
import ServiceSettings from './serviceSettings';
import ServiceGroup from './serviceGroup';
import ServiceBusiness from './serviceBusiness';
import DoubleQuotes from './doubleQuotes';
import Menu from './menu';

const IconUsers = (props) => <Users {...props} />;
const IconLoading = (props) => <Loading {...props} />;
const IconChat = (props) => <Chat {...props} />;
const IconFaceBook = (props) => <Facebook {...props} />;
const IconLinkedIn = (props) => <LinkedIn {...props} />;
const IconTwitter = (props) => <Twitter {...props} />;
const IconMail = (props) => <Mail {...props} />;
const IconLogo = (props) => <Logo {...props} />;
const IconServiceSettings = (props) => <ServiceSettings {...props} />;
const IconServiceGroup = (props) => <ServiceGroup {...props} />;
const IconServiceBusiness = (props) => <ServiceBusiness {...props} />;
const IconDoubleQuotes = (props) => <DoubleQuotes {...props} />;
const IconMenu = (props) => <Menu {...props} />;

export {
	IconLoading,
	IconUsers,
	IconChat,
	IconFaceBook,
	IconLinkedIn,
	IconTwitter,
	IconMail,
	IconLogo,
	IconServiceSettings,
	IconServiceGroup,
	IconServiceBusiness,
	IconDoubleQuotes,
	IconMenu,
};
