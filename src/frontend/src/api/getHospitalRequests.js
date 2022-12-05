/**@module getHospitalRequests */

import axios from '../axios';

/**
 * API to get doctors details for a user
 * @returns {Promise} Response for axios GET request
 */
const getHospitalRequests = () => {
	return axios.get('/approvehospital');
};
export default getHospitalRequests;
