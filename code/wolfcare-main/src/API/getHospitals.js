/**@module getHospitalsApi */

import axios from '../axios';

/**
 * API to update profile details for a user
 * @param {Object} value Object containing updated user details
 * @returns {Promise} Response for axios PUT request
 */
const getHospitalsApi = () => {
	return axios.get('/getHospitals');
};
export default getHospitalsApi;
