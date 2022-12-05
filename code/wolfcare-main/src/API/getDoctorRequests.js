/**@module getDoctorRequests */

import axios from '../axios';

/**
 * API to get doctors details for a user
 * @returns {Promise} Response for axios GET request
 */
const getDoctorRequests = () => {
	return axios.get('/approvedoctors');
};
export default getDoctorRequests;
