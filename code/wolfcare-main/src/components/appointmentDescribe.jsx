import React from 'react';
import { Spinner } from 'reactstrap';
import { Button, DatePicker } from 'antd';
import {
	CalendarOutlined,
	ClockCircleOutlined,
	UserOutlined
} from '@ant-design/icons';

class DescribeAppointment extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false
		};
	}

	render() {
		return (
			<div className='signup-content'>
				<div className='signup-form'>
					<form className='register-form' id='register-form'>
						<div className='form-group'>
							<CalendarOutlined />
							<DatePicker showTime style={{marginLeft: '5%'}} placeholder={'Select date and time'} required/>
						</div>
						<div className='form-group'>
							<UserOutlined style={{marginTop: '4%'}}/>
							<input type='text' name='name' id='name' placeholder='Doctor Name' required style={{float: 'right'}} />
						</div>
						<div className='form-group'>
							<ClockCircleOutlined style={{marginTop: '4%'}}/>
							<Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: 'green', float: 'right', marginRight: '65%'}}><p style={{float: 'left', marginTop: '0.5em'}}>Active</p></Button>
						</div>
						<div className='form-group form-button'>
							{ this.state.loading ? <Spinner /> : <input type='submit' name='signup' id='signup' className='form-submit' value='Update' onClick={ this.handleSubmit } /> }
						</div>
					</form>
				</div>
				<div className='appointment-image'>
					<figure><img src='../appointment2.jpg' alt='edit-appointment' /></figure>
				</div>
			</div>
		);
	}
}

export default DescribeAppointment;