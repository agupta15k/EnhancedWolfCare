import React from 'react';
import { Table } from 'antd';
import { doctorsData, doctorsColumns } from '../constants/doctors';

class DoctorsList extends React.Component {
	render() {
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

export default DoctorsList;
