/**@module hospitalListApi */

import axios from '../axios';

/**
 * API to hospital list for a user
 * @param {Object} value Object containing updated user details
 * @returns {Promise} Response for axios PUT request
 */
const hospitalListApi = () => {
	// return {
	// 	data: {
	// 		status: 200,
	// 		message: 'hospital list fetched successfully',
	// 		data: []
	// 	}
	// };
	return axios.get('/getHospitals');
};
export default hospitalListApi;
