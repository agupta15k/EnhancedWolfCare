/**@module getAppointmentsForUser */

import axios from '../axios';

/**
 * API to update profile details for a user
 * @param {Object} value Object containing updated user details
 * @returns {Promise} Response for axios PUT request
 */
const getAppointmentsForUser = (id) => {
	return axios.get('/appointmentInfoUser?id=' + id);
};
export default getAppointmentsForUser;
