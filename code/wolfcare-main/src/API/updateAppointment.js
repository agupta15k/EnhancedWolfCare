/**@module updateAppointmentApi */

import axios from '../axios';

/**
 * API to update profile details for a user
 * @param {Object} value Object containing updated user details
 * @returns {Promise} Response for axios PUT request
 */
const updateAppointmentApi = (user) => {
	return axios.put('/updateprofile', {
		...user
	});
};
export default updateAppointmentApi;
