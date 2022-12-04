import React from 'react';
import NotFound from './404';
import { Table } from 'antd';
import { doctorsData, doctorsColumns } from '../constants/doctors';

class AdminRequests extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: props.userLogonDetails.userType
		};
	}

	render() {
		if (this.state.userType !== 'admin') {
			return (
				<NotFound />
			);
		}
		return (
			<Table
				columns={ doctorsColumns }
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
				dataSource={ doctorsData }
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

export default AdminRequests;
