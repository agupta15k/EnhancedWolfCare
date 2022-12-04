import React from 'react';
import { Button} from 'antd';

// Dummy appointments list

export const appointmentsData = [
	{
		key: 1,
		appointDateTime: '2022-12-04 14:00:00',
		doctorName: 'Dr. Jack',
		appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: 'green', float: 'right', marginRight: '39%'}}><p style={{float: 'left', marginTop: '0.5em'}}>Active</p></Button>
	},
	{
		key: 2,
		appointDateTime: '2022-12-02 14:00:00',
		doctorName: 'Dr. Lucy',
		appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: 'red', float: 'right', marginRight: '35%'}}><p style={{float: 'left', marginTop: '0.5em'}}>Cancelled</p></Button>
	},
	{
		key: 3,
		appointDateTime: '2022-12-08 06:00:00',
		doctorName: 'Dr. Tom',
		appointStatus: <Button disabled shape='round' size='small' style={{height: '40px', color: 'white', backgroundColor: 'gray', float: 'right', marginRight: '34%'}}><p style={{float: 'left', marginTop: '0.5em'}}>Cancelling</p></Button>
	}
];