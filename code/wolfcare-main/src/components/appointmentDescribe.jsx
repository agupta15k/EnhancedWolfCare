import React from 'react';
import { Spinner } from 'reactstrap';
import { DatePicker, Modal } from 'antd';
import {
	CalendarOutlined,
	ClockCircleOutlined,
	UserOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
class DescribeAppointment extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false,
			selectedAppointment: props.selectedAppointment
		};
	}

	disabledDate = (current) => {
		return current < dayjs().endOf('day').subtract(1, 'day');
	};

	disabledTime = () => ({
		disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23]
	});

	handleDateChange = (event) => {
		if (moment(event).format(dateFormat) === this.state.selectedAppointment.appointDateTime) {
			alert('No change in date. Please update the date, else click on cancel.');
		} else if (event < dayjs()) {
			alert('Entered date is older than current time, please fix that.');
		} else {
			this.setState({
				selectedAppointment: {...this.state.selectedAppointment, appointDateTime: moment(event).format(dateFormat)}
			});
		}
	};

	/**
	 * Validate input values and call onSubmitRegister API to register new user
	 * @param {Object} event Button click event
	 * @returns {Boolean} True if everything succeeds, false otherwise
	 */
	handleSubmit = async (event) => {
		event.preventDefault();
		if (Object.keys(this.props).length > 0 && Object.keys(this.props.parentProps).length > 0) {
			const apiInput = {
				appointment: this.state.selectedAppointment
			};
			this.setState({
				loading: true
			});
			await this.props.parentProps.onAppointmentUpdate(apiInput);
			if (this.props.parentProps.updateAppointmentApiStatus) {
				this.setState({
					loading: false
				});
				return true;
			} else {
				this.setState({
					loading: false
				});
				alert(this.props.parentProps.updateAppointmentApiMessage || 'Appointment update failed. Please try again.');
				return false;
			}
		}
		return false;
	};

	render() {
		return (
			<Modal
				title={ <h2>Edit appointment</h2> }
				open={ true }
				onOk={ () => this.props.setAppointmentDescriptionStatus(false) }
				onCancel={ () => this.props.setAppointmentDescriptionStatus(false) }
				width={ 800 }
				height={ 700 }
				footer={ null }
			>
				<div className='signup-content'>
					<div className='signup-form'>
						<form className='register-form' id='register-form'>
							<div className='form-group'>
								<CalendarOutlined />
								<DatePicker
									format={dateFormat}
									showTime
									style={{marginLeft: '5%'}}
									placeholder={'Select date and time'}
									required
									disabledDate={this.disabledDate}
									disabledTime={this.disabledTime}
									value={moment(this.state.selectedAppointment.appointDateTime)}
									onOk={this.handleDateChange}
								/>
							</div>
							<div className='form-group'>
								<UserOutlined style={{marginTop: '4%'}}/>
								<input type='text' name='name' id='name' placeholder='Doctor Name' style={{float: 'right'}} value={this.state.selectedAppointment.doctorName} disabled />
							</div>
							<div className='form-group'>
								<ClockCircleOutlined style={{marginTop: '4%'}}/>
								{this.state.selectedAppointment.appointStatus}
							</div>
							<div className='form-group form-button'>
								{ this.state.loading ? <Spinner /> : <input type='submit' name='update-appointment' id='update-appointment' className='form-submit' value='Update' onClick={ this.handleSubmit } /> }
							</div>
						</form>
					</div>
					<div className='appointment-image'>
						<figure><img src='../appointment2.jpg' alt='edit-appointment' /></figure>
					</div>
				</div>
			</Modal>
		);
	}
}

export default DescribeAppointment;