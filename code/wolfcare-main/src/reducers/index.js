/**@module combineReducers */

import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './registerUser'
/**
 * Combine all reducers
 */
export default combineReducers({
	loginReducer,
	registerReducer
});
