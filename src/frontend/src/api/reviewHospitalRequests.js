/**@module reviewHospitalRequests */

import axios from '../axios';

/**
 * API to get doctors details for a user
 * @returns {Promise} Response for axios GET request
 */
const reviewHospitalRequests = (value) => {
	return axios.put('/approvehospital', {
		...value
	});
};
export default reviewHospitalRequests;
