import React from 'react';
import { Table } from 'antd';
import { appointmentsData, appointmentsColumns } from '../constants/appointments';

class Appointments extends React.Component {
	render() {
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
