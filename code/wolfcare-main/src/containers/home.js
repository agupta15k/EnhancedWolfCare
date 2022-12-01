/**@module homeContainer */

import { connect } from 'react-redux';
import Home from '../components/home';
import onSubmitLoginAPI from '../API/login';


/**
 * Map actions to props for user dashboard component
 * @returns  {Object} Item addition action that triggers addItem API
 */

const homeMapDispatchToProps = dispatch => {
	return {
		// onAddItem: async (value) => {
		// 	try {
		// 		let res = await addItemApi(value);
		// 		dispatch({
		// 			type: res && res.data && res.data.status === 200 ? 'SUBMITITEM' : 'ITEMADDFAILURE',
		// 			payload: res.data
		// 		});
		// 	} catch (error) {
		// 		console.error('Some error occurred while calling axios API', error);
		// 	}
		// }
		onSubmitLogin: async (value) => {
			try {
				let res = await onSubmitLoginAPI(value);
				dispatch({
					type: res && res.data && res.data.status === 200 ? 'SUBMITLOGIN' : 'LOGINFAILURE',
					payload: res.data
				});
			} catch (error) {
				console.error('Some error occurred while calling axios API', error);
			}
		}
	};
};

/**
 * Map state to props for user dashboard component
 * @returns  {Object} Props
 */
const homeMapStateToProps = state => {
	const localStorageUserInfo = JSON.parse(localStorage.getItem('userLogonDetails'))
	return ({
		loginApiStatus: state.home.loginApiSuccess,
		loginApiMessage: state.home.loginApiMessage,
		userId: localStorageUserInfo && localStorageUserInfo.userId
	});
};

/**
 * Using connect, subscribe user dashboard component to redux store
 */
export default connect(homeMapStateToProps, homeMapDispatchToProps)(Home);
