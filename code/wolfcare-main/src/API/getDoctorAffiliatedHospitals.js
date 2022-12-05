/**@module getDoctorAffiliatedHospitalsApi */

import axios from '../axios';

/**
 * API to fetch affiliated hospitals for a doctor
 * @param {Object} id id related to doctor
 * @returns {Promise} Response for axios GET request
 */
const getDoctorAffiliatedHospitalsApi = (id) => {
	return axios.get('/getAffiliatedHospitals');
};
export default getDoctorAffiliatedHospitalsApi;
