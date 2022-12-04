/**@module homeReducer */

const initialState = {
	loginApiMessage: '',
	loginApiSuccess: false,
	registerApiMessage: '',
	registerApiSuccess: false,
	updateAppointmentApiMessage: '',
	updateAppointmentApiSuccess: false,
	deleteAppointmentApiMessage: '',
	deleteAppointmentApiSuccess: false,
	user_id: ''
};

/**
 * Reducer for user dashboard component
 * @param {*} state Initial state
 * @param {*} action Action which triggers the reducer execution
 * @returns {Object} Updated state
 */
const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		// Success case
		case 'SUBMITLOGIN': {
			if (action.payload && action.payload.data) {
				const userId = action.payload.data.ID;
				localStorage.setItem('userLogonDetails', JSON.stringify({userId, signInTime: new Date(), signInStatus: true}));
				return {
					...state,
					userId,
					loginApiSuccess: true,
					loginApiMessage: action.payload.message
				};
			}
			return {
				...state,
				loginApiSuccess: false,
				loginApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'LOGINFAILURE': {
			return {
				...state,
				loginApiSuccess: false,
				loginApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITREGISTER': {
			return {
				...state,
				registerApiSuccess: true,
				registerApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'REGISTERFAILURE': {
			return {
				...state,
				registerApiSuccess: false,
				registerApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITUPDATEAPPOINTMENT': {
			return {
				...state,
				updateAppointmentApiSuccess: true,
				updateAppointmentApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'UPDATEAPPOINTMENTFAILURE': {
			return {
				...state,
				updateAppointmentApiSuccess: false,
				updateAppointmentApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITDELETEAPPOINTMENT': {
			return {
				...state,
				deleteAppointmentApiSuccess: true,
				deleteAppointmentApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'DELETEAPPOINTMENTFAILURE': {
			return {
				...state,
				deleteAppointmentApiSuccess: false,
				deleteAppointmentApiMessage: action.payload.message
			};
		}
		default: return state;
	}
};
export default homeReducer;
