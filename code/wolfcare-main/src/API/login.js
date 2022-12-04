/**@module loginApi */

import axios from '../axios';

/**
 * API to authenticate the user
 * @param {Object} value Object containing email and password
 * @returns {Promise} Response for axios POST request
 */
const loginAPI = (value) => {
	// Success dummy response
	return {
		data: {
			status: 200,
			message: 'Logged in Successfully',
			data: {
				ID: 2,
				type: 'user',
				city: [
					'raleigh',
					'cary',
					'durham'
				],
				email: 'a@gmail.com',
				interests: [
					'chair1'
				],
				name: 'a',
				zipCode: [
					'123',
					'543'
				]
			}
		}
	};
	// Failure dummy response
	// return {
	//     data: {
	//         status: 405,
	//         message: 'Incorrect email/password',
	//         data: {}
	//     }
	// };
	// Todo: Uncomment this and remove the test API response once API is up and running
	// return axios.post('validate.php', {
	// 	email: value.email,
	// 	passwords: value.pass
	// }, {
	// 	headers: {
	// 		'Content-Type': 'application/x-www-form-urlencoded'
	// 	}
	// });
};
export default loginAPI;
