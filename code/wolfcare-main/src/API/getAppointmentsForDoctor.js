/**@module getAppointmentsForDoctor */

import axios from '../axios';

/**
 * API to update profile details for a user
 * @param {Object} value Object containing updated user details
 * @returns {Promise} Response for axios PUT request
 */
const getAppointmentsForDoctor = (id) => {
	return axios.get('/appointmentInfoDoctor?id=' + id);
};
export default getAppointmentsForDoctor;
