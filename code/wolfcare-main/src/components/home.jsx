import React from 'react';
import { Avatar, Button, Dropdown, Layout, Menu, Modal } from 'antd';
import {
	CalendarOutlined,
	HomeOutlined,
	InfoCircleOutlined,
	MedicineBoxOutlined,
	PlusSquareOutlined,
	PhoneOutlined,
	UserOutlined
} from '@ant-design/icons';
import LoginUser from './login';
import RegisterUser from './register';
import MainPage from './main';
import DoctorList from './doctorList';
import AboutUs from './about';
import ContactUs from './contact';


/**
 * React component for login
 * @extends React.Component
 */
class Home extends React.Component {
	/**
	 * Set initial state
	 * @param {Object} props Props for the component
	 */
	constructor (props) {
		super(props);
		this.state = {
			tab: '',
			userLogonDetails: {},
			isLoginClicked: false,
			isRegisterClicked: false
		};
	}

	/**
	 * React lifecycle method to route to login page if user is not logged in, else route to history page
	 */
	componentDidMount() {
		const userLogonDetails = JSON.parse(localStorage.getItem('userLogonDetails'));
		this.setState({
			userLogonDetails: userLogonDetails
		});
		const url = new URL(document.location.href);
		const pathWithoutHome = url.pathname.split('/')[ 2 ];
		if (url.pathname === '/') {
			this.redirectToPath('/home');
		} else if (url.pathname === '/home') {
			this.setState({
				tab: 'home'
			});
		} else {
			const paths = [ 'doctors', 'hospitals', 'appointments', 'about', 'contact' ];
			if (paths.includes(pathWithoutHome)) {
				this.setState({
					tab: pathWithoutHome
				});
			}
		}
	}

	/**
	 * Redirect to specified path
	 * @param {String} path Path to redirect
	 */
	redirectToPath = (value) => {
		const url = new URL(document.location.href);
		document.location.href = `${url.origin}${value}`;
	};

	/**
	 * Change tab based on user input
	 * @param {String} value Name of the tab to render
	 */
	setTab = (value) => {
		this.setState({
			tab: value
		});
	};

	setLoginClicked = (val) => {
		const userLogonDetails = JSON.parse(localStorage.getItem('userLogonDetails'));
		this.setState({
			userLogonDetails: userLogonDetails,
			isLoginClicked: val
		});
	};

	setRegisterClicked = (val) => {
		const userLogonDetails = JSON.parse(localStorage.getItem('userLogonDetails'));
		this.setState({
			userLogonDetails: userLogonDetails,
			isRegisterClicked: val
		});
	};

	renderContent = () => {
		switch (this.state.tab) {
			case 'home':
				return <MainPage setTab={this.setTab} redirectToPath={this.redirectToPath} setRegisterClicked={this.setRegisterClicked}/>;
			case 'doctors':
				return <DoctorList />;
			case 'about':
				return <AboutUs />;
			case 'contact':
				return <ContactUs />;
			default:
				return <MainPage setTab={this.setTab} redirectToPath={this.redirectToPath} setRegisterClicked={this.setRegisterClicked}/>;
		}
	};

	/**
	 * Render Login component
	 * @returns {React.Component} Form with login related HTML tags
	 */
	render() {
		const { Header, Content, Footer } = Layout;
		const items = [
			{
				key: 'home',
				icon: <HomeOutlined />,
				label: 'Home',
				onClick: () => this.redirectToPath('/home')
			},
			{
				key: 'doctors',
				icon: <MedicineBoxOutlined />,
				label: 'Doctors',
				onClick: () => this.redirectToPath('/home/doctors')
			},
			{
				key: 'hospitals',
				icon: <PlusSquareOutlined />,
				label: 'Hospitals',
				onClick: () => this.redirectToPath('/home/hospitals')
			},
			{
				key: 'appointments',
				icon: <CalendarOutlined />,
				label: 'Appointments',
				onClick: () => this.redirectToPath('/home/appointments')
			},
			{
				key: 'about',
				icon: <InfoCircleOutlined />,
				label: 'About us',
				onClick: () => this.redirectToPath('/home/about')
			},
			{
				key: 'contact',
				icon: <PhoneOutlined />,
				label: 'Contact us',
				onClick: () => this.redirectToPath('/home/contact')
			}
		];
		return (
			<section>
				<Modal
					title={ <h2>Sign in</h2> }
					open={ this.state.isLoginClicked }
					onOk={ () => this.setLoginClicked(false) }
					onCancel={ () => this.setLoginClicked(false) }
					width={ 800 }
					height={ 700 }
					footer={ null }
				>
					<LoginUser setLoginClicked={ this.setLoginClicked } parentProps={ this.props } />
				</Modal>
				<Modal
					title={ <h2>Sign up</h2> }
					open={ this.state.isRegisterClicked }
					onOk={ () => this.setRegisterClicked(false) }
					onCancel={ () => this.setRegisterClicked(false) }
					width={ 800 }
					height={ 700 }
					style={ { top: 20 } }
					footer={ null }
				>
					<RegisterUser setRegisterClicked={ this.setRegisterClicked } parentProps={ this.props } />
				</Modal>
				<Layout className='layout'>
					<Header style={ { backgroundColor: '#DFDFDF', height: '5.5em' } }>
						<a href='/home' style={ { float: 'left' } }>
							<img style={ { height: '70px', width: '70px', position: 'relative', float: 'left', marginTop: '0.5em' } } src='../wolf.png' alt='wolf'></img>
							<b style={ { color: 'black', marginLeft: '0.5em', float: 'left', fontSize: '25px' } }>WOLF</b><b style={ { color: 'red', float: 'left', fontSize: '25px' } }>CARE</b>
							<br></br>
							<p style={ { color: 'black', float: 'left', fontSize: '15px', marginLeft: '1em', marginTop: '-2.5em' } }>Your pocket doctor</p>
						</a>
						{
							this.props.userId && this.state.userLogonDetails.signInStatus ? <div
								style={ { float: 'right' } }>
								<Dropdown
									placement='bottom'
									menu={ {
										items: [
											{
												key: 'profile',
												label: 'Profile'
											},
											{
												key: 'appointmentHistory',
												label: (
													<a rel='noopener noreferrer' href='/home/appointments'>
														Appointment History
													</a>
												)
											},
											{
												key: 'signout',
												label: (
													<a rel='noopener noreferrer' onClick={ () => {
														let userLogonDetails = this.state.userLogonDetails;
														userLogonDetails.signInStatus = false;
														localStorage.setItem('userLogonDetails', JSON.stringify(userLogonDetails));
														location.reload();
													} }>
														Sign Out
													</a>
												)
											}
										]
									} }
								>
									<Avatar style={ { backgroundColor: '#87d068', marginTop: '20px' } } size={ 50 } icon={ <UserOutlined /> } />
								</Dropdown>
							</div> : <div
								style={ { float: 'right' } }>
								<Button shape='round' type='primary' size='small' style={ { height: '40px', position: 'relative', float: 'left', marginRight: '1em', marginTop: '1.5em' } } onClick={ () => this.setLoginClicked(true) }><p style={ { float: 'left', marginTop: '0.5em' } }>Login</p></Button>
								<Button shape='round' size='small' style={ { height: '40px', position: 'relative', float: 'left', marginTop: '1.5em' } }><p style={ { float: 'left', marginTop: '0.5em' } } onClick={ () => this.setRegisterClicked(true) }>Join Now</p></Button>
							</div>
						}
						<Menu
							style={ { backgroundColor: '#DFDFDF', float: 'right', marginRight: '3em', marginTop: '0.5em' } }
							mode='horizontal'
							items={ items }
							disabledOverflow={ true }
							selectedKeys={ [ this.state.tab || 'home' ] }
						/>
					</Header>
					<Content>
						{ this.renderContent() }
					</Content>
					<Footer style={ { paddingTop: '1em', height: '10px', backgroundColor: '#DFDFDF' } }>Copyright (c) 2022 Group 22</Footer>
				</Layout>
			</section>
		);
	}
}

export default Home;
