import React from 'react';
import { Button, Input, Space, Table } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

class HospitalsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hospitals: props.hospitals || [],
			loading: false,
			columns: [
				{
					title: 'Name',
					dataIndex: 'name',
					key: 'name',
					...this.getColumnSearchProps('name')
				},
				{
					title: 'Address',
					dataIndex: 'addressline1',
					key: 'addressline1',
					...this.getColumnSearchProps('addressline1')
				},
				{
					title: 'Email',
					dataIndex: 'email',
					key: 'email'
				},
				{
					title: 'Phone number',
					dataIndex: 'phone',
					key: 'phone'
				}
			],
			searchedColumn: '',
			searchText: ''
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
			await this.props.parentProps.onGetHospitals();
			if (this.props.parentProps.getHospitalsApiStatus) {
				this.setState({
					loading: false,
					hospitals: this.props.parentProps.hospitals
				});
				return true;
			} else {
				this.setState({
					loading: false
				});
				alert(this.props.parentProps.getHospitalsApiMessage || 'Could not get list of hospitals, please try again.');
				return false;
			}
		}
	};

	handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		this.setSearchText(selectedKeys[0]);
		this.setSearchedColumn(dataIndex);
	};

	handleReset = (clearFilters) => {
		clearFilters();
		this.setSearchText('');
	};

	setSearchedColumn = (col) => {
		this.setState({
			searchedColumn: col
		});
	};

	setSearchText = (text) => {
		this.setState({
			searchText: text
		});
	};

	getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div
				style={{
					padding: 8,
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: 'block',
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{
							width: 90,
						}}
					>
					Search
					</Button>
					<Button
						onClick={() => clearFilters && this.handleReset(clearFilters)}
						size="small"
						style={{
							width: 90,
						}}
					>
					Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? '#1890ff' : undefined,
				}}
			/>
		),
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => this.state.searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			this.state.searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ffc069',
						padding: 0,
					}}
					searchWords={[this.state.searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (text),
	});

	render() {
		return (
			<section style={{margin: '2% 2% 2% 2%'}}>
				<h2>Member hospitals</h2>
				<Table
					columns={this.state.columns}
					dataSource={ this.state.hospitals }
					bordered={ true }
					showHeader
					scroll={ {
						y: 530
					} }
					pagination={ {
						position: [ 'bottomCenter' ],
						showQuickJumper: true
					} }
					loading={this.state.loading}
					style={{marginTop: '2%'}}
				>
				</Table>
			</section>
		);
	}
}

export default HospitalsList;
