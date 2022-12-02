import React from 'react';
import { Button, Table } from 'antd';
import { appointmentsData, appointmentsColumns } from '../constants/appointments';

class Appointments extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
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
			<Table
				columns={ appointmentsColumns }
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
					rowExpandable: (record) => record.name !== 'Not Expandable',
				} }
				dataSource={ appointmentsData }
				bordered={ true }
				showHeader
				scroll={ {
					y: 530
				} }
				pagination={ {
					position: [ 'bottomCenter' ],
					showQuickJumper: true
				} }
			/>
		);
	}
}

export default Appointments;
