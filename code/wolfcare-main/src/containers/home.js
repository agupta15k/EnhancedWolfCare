/**@module homeContainer */

import { connect } from 'react-redux';
import Home from '../components/home';
import onSubmitLoginAPI from '../api/login';
import registerUserApi from '../api/registerUser';
import updateAppointmentApi from '../api/updateAppointment';
import deleteAppointmentApi from '../api/deleteAppointment';
import getHospitalsApi from '../api/getHospitals';
import scheduleAppointmentAPI from '../api/scheduleAppointment';
import getDoctorsApi from '../api/getDoctors';

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
		onAppointmentCreate: async (value) => {
			try {
				console.log(value);
				let res = await scheduleAppointmentAPI(value);
				dispatch({
					type: res && res.data && res.data.status === 200 ? 'SUBMITCREATEAPPOINTMENT' : 'UPDATEAPPOINTMENTFAILURE',
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
		},
		onGetHospitals: async () => {
			try {
				let res = await getHospitalsApi();
				console.log(res);
				dispatch({
					type: res && res.data && res.data.status === 200 ? 'SUBMITGETHOSPITALS' : 'GETHOSPITALSFAILURE',
					payload: res.data
				});
			} catch (error) {
				console.error('Some error occurred while calling axios API', error);
			}
		},
		onGetDoctors: async () => {
			try {
				let res = await getDoctorsApi();
				console.log(res);
				dispatch({
					type: res && res.data && res.data.status === 200 ? 'SUBMITGETDOCTORS' : 'GETDOCTORSFAILURE',
					payload: res.data
				});
			} catch (error) {
				console.error('Some error occurred while calling get doctors axios API', error);
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
		createAppointmentApiStatus: state.home.createAppointmentApiSuccess,
		createAppointmentApiMessage: state.home.createAppointmentApiMessage,
		updateAppointmentApiStatus: state.home.updateAppointmentApiSuccess,
		updateAppointmentApiMessage: state.home.updateAppointmentApiMessage,
		deleteAppointmentApiStatus: state.home.deleteAppointmentApiSuccess,
		deleteAppointmentApiMessage: state.home.deleteAppointmentApiMessage,
		getHospitalsApiStatus: state.home.getHospitalsApiSuccess,
		getHospitalsApiMessage: state.home.getHospitalsApiMessage,
		hospitals: state.home.hospitals,
		getDoctorsApiStatus: state.home.getDoctorsApiSuccess,
		getDoctorsApiMessage: state.home.getDoctorsApiMessage,
		doctors: state.home.doctors,
		userId: localStorageUserInfo && localStorageUserInfo.userId,
		userType: localStorageUserInfo && localStorageUserInfo.userType
	});
};

/**
 * Using connect, subscribe user dashboard component to redux store
 */
export default connect(homeMapStateToProps, homeMapDispatchToProps)(Home);
