import React from 'react';
import { Button, Space, Popconfirm, Table } from 'antd';
import { appointmentsData } from '../constants/appointments';
import DescribeAppointment from './appointmentDescribe';

class AppointmentsList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false,
			showAppointmentDescription: false,
			selectedAppointment: {}
		};
	}

	confirmDeletion = async (record) => {
		// Delete appointment
		if (Object.keys(this.props).length > 0 && Object.keys(this.props.parentProps).length > 0) {
			const apiInput = {
				appointment: record
			};
			this.setState({
				loading: true
			});
			await this.props.parentProps.onAppointmentDelete(apiInput);
			if (this.props.parentProps.deleteAppointmentApiStatus) {
				this.setState({
					loading: false
				});
				location.reload();
				return true;
			} else {
				this.setState({
					loading: false
				});
				alert(this.props.parentProps.deleteAppointmentApiMessage || 'Appointment deletion failed. Please try again.');
				return false;
			}
		}
		return false;
	};

	setAppointmentDescriptionStatus = (val) => {
		this.setState({
			showAppointmentDescription: val
		});
	};

	setSelectedAppointment = (val) => {
		this.setState({
			selectedAppointment: val
		});
	};

	render() {
		const {Column} = Table;
		if (!this.props.userLogonDetails || !this.props.userLogonDetails.signInStatus) {
			return (
				<div className='container' style={{position: 'absolute', width: '45%', height: '40%', top: '25%', right: '25%', opacity: '90%'}}>
					<div>
						<h1 style={{width:'100%', marginTop: '15%', marginRight: '5%', textAlign: 'center'}}>Uh oh! Something went wrong</h1>
						<h2 style={{width:'100%', marginTop: '5%', marginRight: '5%', textAlign: 'center'}}><b>Please login to see appointments</b></h2>
						<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '5%', marginLeft: '45%'}} onClick={() => this.props.setLoginClicked(true)}><p style={{float: 'left', marginTop: '0.5em'}}>Login</p></Button>
					</div>
				</div>
			);
		}
		return (
			<section>
				{this.state.showAppointmentDescription ? <DescribeAppointment setAppointmentDescriptionStatus={this.setAppointmentDescriptionStatus} selectedAppointment={this.state.selectedAppointment} parentProps={this.props.parentProps}/> : null}
				<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '2%', marginBottom: '2%', marginRight: '5%', float: 'right'}} onClick={() => this.props.redirectToPath('/home/doctors')}><p style={{float: 'left', marginTop: '0.5em'}}>Book a new appointment</p></Button>
				<Table
					dataSource={ appointmentsData }
					bordered={ true }
					showHeader
					scroll={ {
						y: 435
					} }
					pagination={ {
						position: [ 'bottomCenter' ],
						showQuickJumper: true
					} }
					loading={this.state.loading}
				>
					<Column title='Id' dataIndex='key' key='key' width='5%' />
					<Column title="Appointment Date" dataIndex="appointDate" key="appointDate" />
					<Column title="Appointment Time" dataIndex="appointTime" key="appointTime" />
					<Column title="Doctor" dataIndex="doctorName" key="doctorName" />
					<Column title="Hospital" dataIndex="hospitalName" key="hospitalName" />
					<Column title="Appointment Status" dataIndex="appointStatus" key="appointStatus" />
					<Column
						title="Action"
						key="action"
						render={(_, record) => {
							return (<Space size="middle">
								<a className='link' onClick={() => {
									this.setSelectedAppointment(record);
									this.setAppointmentDescriptionStatus(true);
								}}>Edit</a>
								<Popconfirm
									title="Are you sure to cancel this appointment?"
									onConfirm={() => this.confirmDeletion(record)}
									okText="Yes"
									cancelText="No"
								>
									<a className='link'>Cancel</a>
								</Popconfirm>
							</Space>);
						}}
					/>
				</Table>
			</section>
		);
	}
}

export default AppointmentsList;
