import React from 'react';

export const doctorsColumns = [
	{
		title: 'Doctor',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'specialization',
		dataIndex: 'experience',
		key: 'experience',
	},
	{
		title: 'experience',
		dataIndex: 'specialization',
		key: 'experience',
	},
	{
		title: 'Appointment',
		dataIndex: '',
		key: 'x',
		// render: (x) => <a>Delete{console.log(x)}</a>,
	},
];

// Dummy doctors list

export const doctorsData = [
	{
		key: 1,
		name: 'John Brown',
		experience: 32,
		specialization: 'New York No. 1 Lake Park',
		description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
	},
	{
		key: 2,
		name: 'Jim Green',
		experience: 42,
		specialization: 'London No. 1 Lake Park',
		description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	},
	{
		key: 3,
		name: 'Not Expandable',
		experience: 29,
		specialization: 'Jiangsu No. 1 Lake Park',
		description: 'This not expandable',
	},
	{
		key: 4,
		name: 'Joe Black',
		experience: 32,
		specialization: 'Sidney No. 1 Lake Park',
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 5,
		name: 'John Brown',
		experience: 32,
		specialization: 'New York No. 1 Lake Park',
		description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
	},
	{
		key: 6,
		name: 'Jim Green',
		experience: 42,
		specialization: 'London No. 1 Lake Park',
		description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	}
];