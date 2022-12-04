/**@module deleteAppointmentApi */

import axios from '../axios';

/**
 * API to update profile details for a user
 * @param {Object} value Object containing updated user details
 * @returns {Promise} Response for axios PUT request
 */
const deleteAppointmentApi = (user) => {
	return {
		data: {
			status: 200,
			message: 'You have registered successfully',
			data: {}
		}
	};
	// return axios.put('/updateprofile', {
	// 	...user
	// });
};
export default deleteAppointmentApi;
