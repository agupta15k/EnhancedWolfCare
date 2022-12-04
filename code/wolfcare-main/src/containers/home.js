/**@module homeContainer */

import { connect } from 'react-redux';
import Home from '../components/home';
import onSubmitLoginAPI from '../api/login';
import registerUserApi from '../api/registerUser';
import updateAppointmentApi from '../api/updateAppointment';
import deleteAppointmentApi from '../api/deleteAppointment';


/**
 * Map actions to props for user dashboard component
 * @returns  {Object} Item addition action that triggers addItem API
 */

const homeMapDispatchToProps = dispatch => {
	return {
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
		},
		onSubmitRegister: async (value) => {
			try {
				let res = await registerUserApi(value);
				dispatch({
					type: res && res.data && res.data.status === 200 ? 'SUBMITREGISTER' : 'REGISTERFAILURE',
					payload: res.data
				});
			} catch (error) {
				console.error('Some error occurred while calling axios API', error);
			}
		},
		onAppointmentUpdate: async (value) => {
			try {
				let res = await updateAppointmentApi(value);
				dispatch({
					type: res && res.data && res.data.status === 200 ? 'SUBMITUPDATEAPPOINTMENT' : 'UPDATEAPPOINTMENTFAILURE',
					payload: res.data
				});
			} catch (error) {
				console.error('Some error occurred while calling axios API', error);
			}
		},
		onAppointmentDelete: async (value) => {
			try {
				let res = await deleteAppointmentApi(value);
				dispatch({
					type: res && res.data && res.data.status === 200 ? 'SUBMITDELETEAPPOINTMENT' : 'DELETEAPPOINTMENTFAILURE',
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
	const localStorageUserInfo = JSON.parse(localStorage.getItem('userLogonDetails'));
	return ({
		loginApiStatus: state.home.loginApiSuccess || localStorageUserInfo.signInStatus,
		loginApiMessage: (localStorageUserInfo.signInStatus && 'Logged in Successfully') || state.home.loginApiMessage,
		registerApiStatus: state.home.registerApiSuccess,
		registerApiMessage: state.home.registerApiMessage,
		updateAppointmentApiStatus: state.home.updateAppointmentApiSuccess,
		updateAppointmentApiMessage: state.home.updateAppointmentApiMessage,
		deleteAppointmentApiStatus: state.home.deleteAppointmentApiSuccess,
		deleteAppointmentApiMessage: state.home.deleteAppointmentApiMessage,
		userId: localStorageUserInfo && localStorageUserInfo.userId
	});
};

/**
 * Using connect, subscribe user dashboard component to redux store
 */
export default connect(homeMapStateToProps, homeMapDispatchToProps)(Home);
