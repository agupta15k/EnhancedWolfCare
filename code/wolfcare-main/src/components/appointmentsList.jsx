import React from 'react';
import { Button, Space, Modal, Popconfirm, Table } from 'antd';
import { appointmentsData } from '../constants/appointments';
import DescribeAppointment from './appointmentDescribe';

class AppointmentsList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			showAppointmentDescription: false,
			selectedAppointment: {}
		};
	}

	confirmDeletion = (record) => {
		// Delete appointment
		console.log(record);
	};

	setAppointmentDescriptionStatus = (val) => {
		this.setState({
			showAppointmentDescription: val
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
				<Modal
					title={ <h2>Edit appointment</h2> }
					open={ this.state.showAppointmentDescription }
					onOk={ () => this.setAppointmentDescriptionStatus(false) }
					onCancel={ () => this.setAppointmentDescriptionStatus(false) }
					width={ 800 }
					height={ 700 }
					footer={ null }
				>
					<DescribeAppointment selectedAppointment={this.state.selectedAppointment}/>
				</Modal>
				<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '2%', marginBottom: '2%', marginRight: '5%', float: 'right'}} onClick={() => this.props.redirectToPath('/home/doctors')}><p style={{float: 'left', marginTop: '0.5em'}}>Book a new appointment</p></Button>
				<Table
					expandable={ {
						expandedRowRender: (record) => (
							<p
								style={ {
									margin: 0,
								} }
							>
								{ record.description }
							</p>
						),
						rowExpandable: (record) => record.appointDate !== 'Not Expandable',
					} }
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
				>
					<Column title="Appointment Date and Time" dataIndex="appointDateTime" key="appointDateTime" />
					<Column title="Doctor" dataIndex="doctor" key="doctor" />
					<Column title="Appointment Status" dataIndex="appointStatus" key="appointStatus" />
					<Column
						title="Action"
						key="action"
						render={(_, record) => {
							return (<Space size="middle">
								<a className='link' onClick={() => this.setAppointmentDescriptionStatus(true)}>Edit</a>
								<Popconfirm
									title="Are you sure to delete this appointment?"
									onConfirm={() => this.confirmDeletion(record)}
									okText="Yes"
									cancelText="No"
								>
									<a className='link'>Delete</a>
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
