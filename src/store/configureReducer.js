import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { connectRouter } from 'connected-react-router';

const configureReducer = (history) => {
	return combineReducers({
		router: connectRouter(history),
		browser: createResponsiveStateReducer({
			mobile: 320,
			tablet: 768,
			medium: 900,
			desktop: 1024,
		}),
	});
};

export default configureReducer;
