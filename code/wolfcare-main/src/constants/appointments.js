import React from 'react';
import { Button} from 'antd';

// Dummy appointments list

export const appointmentsData = [
	{
		key: 1,
		appointDate: '2022-12-05',
		appointTime: '14:00:00',
		doctorName: 'Dr. Jack',
		hospitalName: 'A',
		appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: 'green', float: 'right', marginRight: '39%'}}><p style={{float: 'left', marginTop: '0.5em'}}>Active</p></Button>
	},
	{
		key: 2,
		appointDate: '2022-12-06',
		appointTime: '14:00:00',
		doctorName: 'Dr. Lucy',
		hospitalName: 'B',
		appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: 'red', float: 'right', marginRight: '35%'}}><p style={{float: 'left', marginTop: '0.5em'}}>Cancelled</p></Button>
	},
	{
		key: 3,
		appointDate: '2022-12-08',
		appointTime: '16:00:00',
		doctorName: 'Dr. Tom',
		hospitalName: 'C',
		appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: 'gray', float: 'right', marginRight: '34%'}}><p style={{float: 'left', marginTop: '0.5em'}}>Cancelling</p></Button>
	}
];