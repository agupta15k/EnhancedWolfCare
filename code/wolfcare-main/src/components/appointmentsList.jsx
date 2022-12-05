import React from 'react';
import { Button, Space, Popconfirm, Table } from 'antd';
import DescribeAppointment from './appointmentDescribe';

class AppointmentsList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false,
			showAppointmentDescription: false,
			selectedAppointment: {},
			userAppointments: props.parentProps.userAppointments,
			doctorAppointments: props.parentProps.doctorAppointments
		};
	}

	componentDidMount() {
		this.handleSubmit();
	}

	handleSubmit = async () => {
		if (Object.keys(this.props.parentProps).length > 0) {
			this.setState({
				loading: true
			});
			if (Object.keys(this.props.parentProps.userInfo.doctor).length > 0) {
				await this.props.parentProps.onGetAppointmentsForDoctor(this.props.parentProps.userInfo.doctor.doctorid);
				if (this.props.parentProps.getAppointmentsForDoctorStatus) {
					let doctorAppointments = this.props.parentProps.doctorAppointments.map((app) => {
						return ({
							...app,
							doctorName: 'Dr. ' + app.firstname + ' ' + app.lastname,
							appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: app.isactive === 'TRUE' ? 'green' : 'red', float: 'right', marginRight: app.isactive === 'TRUE' ? '39%' : '32%'}}><p style={{float: 'left', marginTop: '0.5em'}}>{app.isactive === 'TRUE' ? 'Active' : 'Cancelled'}</p></Button>
						});
					});
					this.setState({
						loading: false,
						doctorAppointments
					});
					return true;
				} else {
					this.setState({
						loading: false
					});
					alert(this.props.parentProps.getAppointmentsForDoctorMessage || 'Could not get list of appointments, please try again.');
					return false;
				}
			} else {
				await this.props.parentProps.onGetAppointmentsForUser(this.props.parentProps.userInfo.user.userid);
				if (this.props.parentProps.getAppointmentsForUserStatus) {
					let userAppointments = this.props.parentProps.userAppointments.map((app) => {
						return ({
							...app,
							doctorName: 'Dr. ' + app.firstname + ' ' + app.lastname,
							appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: app.isactive === 'TRUE' ? 'green' : 'red', float: 'right', marginRight: app.isactive === 'TRUE' ? '39%' : '32%'}}><p style={{float: 'left', marginTop: '0.5em'}}>{app.isactive === 'TRUE' ? 'Active' : 'Cancelled'}</p></Button>
						});
					});
					this.setState({
						loading: false,
						userAppointments
					});
					return true;
				} else {
					this.setState({
						loading: false
					});
					alert(this.props.parentProps.getAppointmentsForUserMessage || 'Could not get list of appointments, please try again.');
					return false;
				}
			}
		}
	};

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
			<section style={{margin: '2% 2% 2% 2%'}}>
				{this.state.showAppointmentDescription ? <DescribeAppointment setAppointmentDescriptionStatus={this.setAppointmentDescriptionStatus} selectedAppointment={this.state.selectedAppointment} parentProps={this.props.parentProps}/> : null}
				<h2 style={{float: 'left'}}>Appointments</h2>
				<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginBottom: '2%', marginRight: '5%', float: 'right'}} onClick={() => this.props.redirectToPath('/home/doctors')}><p style={{float: 'left', marginTop: '0.5em'}}>Book a new appointment</p></Button>
				<Table
					dataSource={ Object.keys(this.props.parentProps.userInfo.doctor).length > 0 ? this.state.doctorAppointments : this.state.userAppointments }
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
					<Column title="Appointment Date" dataIndex="date" key="date" />
					<Column title="Appointment Time" dataIndex="timeslot" key="timeslot" />
					<Column title="Doctor" dataIndex="doctorName" key="doctorName" />
					<Column title="Hospital" dataIndex="name" key="name" />
					<Column title="Appointment Status" dataIndex="appointStatus" key="appointStatus" />
					<Column
						title="Action"
						key="action"
						render={(_, record) => {
							return (<Space size="middle">
								<a className='link' onClick={() => {
									if (record.isactive === 'TRUE') {
										this.setSelectedAppointment(record);
										this.setAppointmentDescriptionStatus(true);
									} else {
										alert('Appointment not active');
										return false;
									}
								}}>Edit</a>
								<Popconfirm
									title="Are you sure to cancel this appointment?"
									onConfirm={() => this.confirmDeletion(record)}
									okText="Yes"
									cancelText="No"
									disabled={record.isactive !== 'TRUE'}
								>
									<a className='link' onClick={() => {
										if (record.isactive !== 'TRUE') {
											alert('Appointment not active');
											return false;
										}
									}}>Cancel</a>
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
