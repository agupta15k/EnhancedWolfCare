/**@module reviewDoctorRequests */

import axios from '../axios';

/**
 * API to get doctors details for a user
 * @returns {Promise} Response for axios GET request
 */
const reviewDoctorRequests = (value) => {
	return axios.put('/approvedoctors', {
		...value
	});
};
export default reviewDoctorRequests;
