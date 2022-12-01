import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Spinner } from 'reactstrap';

/**
 * React component for RegisterUser
 * @extends React.Component
 */
class RegisterUser extends React.Component {
	/**
	 * Set initial state
	 * @param {Object} props Props for the component
	 */
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			pass: '',
			rePass: '',
			//for user:
			bloodGroup: '',
			phoneNumber: '',
			// for doctor:
			experience: '',
			specialization: '',
			// hospitalLocation: '',
			loading: false
		};
	}

	/**
	 * Update state with user entered values
	 * @param {Object} event Event sent for onChange event
	 */
	handleInput = (event) => {
		if (event.type === 'change') {
			if (event.target) {
				this.setState({
					[ event.target.id ]: event.target.value
				});
			}
		} else {
			this.setState({
				[ event.name ]: event.values
			});
		}
	};

	/**
	 * Add new zip codes to state
	 * @param {Object} event New zip code addition event
	 */
	handleAddition = (event) => {
		this.setState({
			zipCodes: [ ...this.state.zipCodes, event ]
		});
	};

	/**
	 * Remove deleted zip code from state
	 * @param {Number} id Id of the item to be removed
	 */
	handleDelete = (id) => {
		this.setState({
			zipCodes: this.state.zipCodes.filter((tag, index) => index !== id)
		});
	};

	/**
	 * Validate input values and call onSubmitRegister API to register new user
	 * @param {Object} event Button click event
	 * @returns {Boolean} True if everything succeeds, false otherwise
	 */
	handleSubmit = async (event) => {
		const keys = [ 'name', 'email', 'pass', 'rePass' ];
		for (let i = 0; i < keys.length; i++) {
			if (this.state[ keys[ i ] ] === '') return false;
		}
		event.preventDefault();
		const emailRegex = new RegExp('\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})');
		if (!this.state.email.match(emailRegex)) {
			alert('Email format not correct. Enter email in correct format');
			return false;
		}
		if (this.state.pass !== this.state.rePass) {
			alert('Password does not match the confirmation. Ensure to enter matching passwords');
			return false;
		}
		if (this.state.bloodGroup === '') {
			alert('Missing values for blood group. Enter your blood group.');
			return false;
		}
		if (this.state.phoneNumber === '') {
			alert('Missing values for phone number. Enter your phone number.');
			return false;
		}
		// if (this.state.experience === '') {
		// 	alert('Missing values for experience. Enter your experience.');
		// 	return false;
		// }
		// if (this.state.specialization === '') {
		// 	alert('Missing values for specialization. Enter your specialization.');
		// 	return false;
		// }
		if (Object.keys(this.props).length > 0 && Object.keys(this.props.parentProps).length > 0) {
			const apiInput = {
				name: this.state.name,
				email: this.state.email,
				pass: this.state.pass,
				rePass: this.state.rePass,
				bloodGroup: this.state.bloodGroup.value,
				phoneNumber: this.state.phoneNumber,
				experience: this.state.experience,
				specialization: this.state.specialization,
				type: this.props.type,
			};
			this.setState({
				loading: true
			});
			await this.props.parentProps.onSubmitRegister(apiInput);
			if (this.props.parentProps.registerApiStatus) {
				const loginApiInput = {
					email: this.state.email,
					pass: this.state.pass
				};
				await this.props.parentProps.onSubmitLogin(loginApiInput);
				if (this.props.parentProps.loginApiStatus) {
					this.setState({
						loading: false
					});
					this.props.setRegisterClicked(false);
					return true;
				} else {
					this.setState({
						loading: false
					});
					alert(this.props.parentProps.loginApiMessage || 'Automatic login failed, please login manually.');
				}
			} else {
				this.setState({
					loading: false
				});
				alert(this.props.parentProps.registerApiMessage || 'User creation could not complete. Please try again.');
				return false;
			}
		}
		return false;
	};

	/**
	 * Render RegisterUser component
	 * @returns {React.Component} Form with register user related HTML tags
	 */
	render() {
		const bloodGroups = [
			{
				label: 'O+',
				value: 'O+'
			},
			{
				label: 'O-',
				value: 'O-'
			},
			{
				label: 'A+',
				value: 'A+'
			},
			{
				label: 'A-',
				value: 'A-'
			},
			{
				label: 'B+',
				value: 'B+'
			},
			{
				label: 'B-',
				value: 'B-'
			},
			{
				label: 'AB+',
				value: 'AB+'
			},
			{
				label: 'AB-',
				value: 'AB-'
			}
		];
		const animatedComponents = makeAnimated();
		return (
			<div className='signup-content'>
				<div className='signup-form'>
					<form className='register-form' id='register-form'>
						<div className='form-group'>
							<img src='../signup-name.png' alt='signup name' />
							<input autoFocus type='text' name='name' id='name' placeholder='Your Name' value={ this.state.name } onChange={ this.handleInput } required />
						</div>
						<div className='form-group'>
							<img src='../signup-email.png' alt='signup enail' />
							<input type='email' name='email' id='email' placeholder='Your Email' value={ this.state.email } onChange={ this.handleInput } required />
						</div>
						<div className='form-group'>
							<img src='../signup-pass.png' alt='signup password' />
							<input type='password' name='pass' id='pass' placeholder='Password' value={ this.state.pass } onChange={ this.handleInput } required />
						</div>
						<div className='form-group'>
							<img src='../signup-repass.png' alt='signup repeat password' />
							<input type='password' className={ this.state.pass !== this.state.rePass ? 'error' : '' } name='rePass' id='rePass' placeholder='Repeat your password' value={ this.state.rePass } onChange={ this.handleInput } required />
						</div>
						<div className='form-group' style={ { overflow: 'unset' } }>
							<img src='../blood-group.png' alt='blood group' />
							<Select
								closeMenuOnSelect={ false }
								components={ animatedComponents }
								isMulti={ false }
								options={ bloodGroups }
								placeholder={ 'Your blood group' }
								maxMenuHeight={ 200 }
								menuPlacement='top'
								name='bloodGroup'
								onChange={ (event) => this.handleInput({ values: event, name: 'bloodGroup' }) }
							/>
						</div>
						<div className='form-group'>
							<img src='../phone-number.png' alt='phone number' />
							<input type='text' name='phoneNumber' id='phoneNumber' placeholder='Your phone number' value={ this.state.phoneNumber } onChange={ this.handleInput } required />
						</div>
						{
							this.props.type === 'doctor' ? (
								<>
									<div className='form-group'>
										<img src='../experience.png' alt='experience' />
										<input type='text' name='experience' id='experience' placeholder='Your experience' value={ this.state.experience } onChange={ this.handleInput } required />
									</div>
									<div className='form-group'>
										<img src='../specialization.png' alt='specialization' />
										<input type='text' name='specialization' id='specialization' placeholder='Your specialization' value={ this.state.specialization } onChange={ this.handleInput } required />
									</div></>
							) : (<></>)
						}
						<div className='form-group form-button'>
							{ this.state.loading ? <Spinner /> : <input type='submit' name='signup' id='signup' className='form-submit' value='Register' onClick={ this.handleSubmit } /> }
						</div>
					</form>
				</div>
				<div className='signup-image'>
					<figure><img src='../signup-image.png' alt='sign up' /></figure>
				</div>
			</div>
		);
	}
}

export default RegisterUser;
