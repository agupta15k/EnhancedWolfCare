import React from 'react';
import {Button, Layout, Menu, Modal} from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import {
	HomeOutlined,
	MedicineBoxOutlined,
	PlusSquareOutlined,
	CalendarOutlined,
	InfoCircleOutlined,
	PhoneOutlined
} from '@ant-design/icons';
import LoginUser from './login';


/**
 * React component for login
 * @extends React.Component
 */
class Home extends React.Component {
	/**
	 * Set initial state
	 * @param {Object} props Props for the component
	 */
	constructor(props) {
		super(props);
		this.state = {
			tab: '',
			userLogonDetails: {},
			isLoginClicked: false
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
		const pathWithoutHome = url.pathname.split('/')[2];
		if (url.pathname === '/home' || url.pathname === '/') {
			this.redirectToPath('/home/home');
		} else {
			const paths = ['home', 'doctors', 'hospitals', 'appointments', 'about', 'contact'];
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
		this.setState({
			isLoginClicked: val
		});
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
				onClick: () => this.redirectToPath('/home/home')

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
					title={<h2>Sign in</h2>}
					open={this.state.isLoginClicked}
					onOk={() => this.setLoginClicked(false)}
					onCancel={() => this.setLoginClicked(false)}
					width={800}
					height={600}
					footer={null}
				>
					<LoginUser setLoginClicked={this.setLoginClicked} parentProps={this.props}/>
				</Modal>
				<Layout className="layout">
					<Header style={{backgroundColor: '#DFDFDF', height: '5.5em'}}>
						<div style={{float:'left'}}>
							<img style={{height: '70px',  width: '70px', position: 'relative', float: 'left', marginTop: '0.5em'}} src='../wolf.png' alt='wolf'></img>
							<b style={{color: 'black', marginLeft: '0.5em', float:'left', fontSize: '25px'}}>WOLF</b><b style={{color: 'red', float: 'left', fontSize: '25px'}}>CARE</b>
							<br></br>
							<p style={{color: 'black', float: 'left', fontSize: '15px', marginLeft: '1em', marginTop: '-2.5em'}}>Your pocket doctor</p>
						</div>
						<div style={{float: 'right'}}>
							<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', float: 'left', marginRight: '1em', marginTop: '1.5em'}} onClick={() => this.setLoginClicked(true)}><p style={{float: 'left', marginTop: '0.5em'}}>Login</p></Button>
							<Button shape='round' size='small' style={{height: '40px', position: 'relative', float: 'left', marginTop: '1.5em'}}><p style={{float: 'left', marginTop: '0.5em'}} onClick={() => this.redirectToPath('/register')}>Join Now</p></Button>
						</div>
						<Menu
							style={{backgroundColor: '#DFDFDF', float: 'right', marginRight: '3em', marginTop: '0.5em'}}
							mode="horizontal"
							items={items}
							disabledOverflow={true}
							selectedKeys={[this.state.tab || 'home']}
						/>
					</Header>
					<Content>
						<div style={{marginTop: '0em', height: '650px', backgroundColor: 'black'}}>
							<Carousel
								indicators={false}
								interval={null}
								keyboard={true}
								prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{marginLeft: '-10em'}}/>}
								nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{marginLeft: '10em'}}/>}
							>
								<Carousel.Item style={{height: '650px'}}>
									<div>
										<img src='../slider5.jpeg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
										<div className="container" style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
											<div>
												<div style={{width: '250px', marginTop: '80px', marginLeft: '30px', float: 'left'}}>
													<figure><img src="../doc2.jpg" alt="sign in" /></figure>
												</div>
												<div style={{marginTop: '110px', marginLeft: '20px', float: 'left', width: '280px'}}>
													<h2>Looking for a doctor?</h2>
													<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}} onClick={() => this.redirectToPath('/home/doctors')}><p style={{float: 'left', marginTop: '0.5em'}}>Find doctor</p></Button>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item style={{height: '650px'}}>
									<div>
										<img src='../slider6.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
										<div className="container" style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
											<div>
												<div style={{width: '250px', marginTop: '80px', marginLeft: '30px', float: 'left'}}>
													<figure><img src="../hospital1.jpg" alt="sign in" /></figure>
												</div>
												<div style={{marginTop: '110px', marginLeft: '20px', float: 'left', width: '280px'}}>
													<h2>Looking for a hospital?</h2>
													<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}} onClick={() => this.redirectToPath('/home/hospitals')}><p style={{float: 'left', marginTop: '0.5em'}}>Find hospital</p></Button>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item style={{height: '650px'}}>
									<div>
										<img src='../slider4.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
										<div className="container" style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
											<div>
												<div style={{width: '250px', marginTop: '60px', marginLeft: '30px', float: 'left'}}>
													<figure><img src="../appointment.jpg" alt="sign in" style={{height: '200px', marginLeft: '10px', float: 'left'}}/></figure>
												</div>
												<div style={{marginTop: '110px', marginLeft: '20px', float: 'left', width: '280px'}}>
													<h2>Book an appointment anytime, anywhere</h2>
													<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}} onClick={() => this.redirectToPath('/home/appointments')}><p style={{float: 'left', marginTop: '0.5em'}}>Book appointment</p></Button>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item style={{height: '650px'}}>
									<div>
										<img src='../slider1.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
										<div className="container" style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '30%', opacity: '90%'}}>
											<div>
												<div style={{width: '250px', marginTop: '60px', marginLeft: '30px', float: 'left'}}>
													<figure><img src="../doc1.jpg" alt="sign in" style={{width: '180px', height: '180px'}}/></figure>
												</div>
												<div style={{marginTop: '80px', marginLeft: '20px', float: 'left', width: '280px'}}>
													<h2>Are you a Doctor?</h2>
													<h1><b>Join our team</b></h1>
													<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}} onClick={() => this.redirectToPath('/register')}><p style={{float: 'left', marginTop: '0.5em'}}>Join as Doctor</p></Button>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item style={{height: '650px'}}>
									<div>
										<img src='../slider3.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
										<div className="container" style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '20%', opacity: '90%'}}>
											<div>
												<div style={{width: '250px', marginTop: '80px', marginLeft: '30px', float: 'left'}}>
													<figure><img src="../hospital.jpg" alt="sign in" /></figure>
												</div>
												<div style={{marginTop: '80px', marginLeft: '20px', float: 'left', width: '280px'}}>
													<h2>Represent a hospital?</h2>
													<h1><b>Join our team</b></h1>
													<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}} onClick={() => this.redirectToPath('/register')}><p style={{float: 'left', marginTop: '0.5em'}}>Add hospital</p></Button>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
							</Carousel>
						</div>
					</Content>
					<Footer style={{paddingTop: '1em', height: '10px', backgroundColor:'#DFDFDF'}}>Copyright (c) 2022 Group 22</Footer>
				</Layout>
			</section>
		);
	}
}

export default Home;
