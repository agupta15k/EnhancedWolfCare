import React from 'react';
import { Provider } from 'react-redux';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import {Button, Breadcrumb, Layout, Menu} from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';


/**
 * Root component to connect child components with redux store and render them
 * @extends React.Component
 */
class Wolfcare extends React.Component {
	/**
	 * Create and return a router to render the respective component based on the path in URL
	 * @returns {React.Component} Router with respective component subscribed to the shared redux store
	 * <br/>
	 */

	render() {
		const { Header, Content, Footer } = Layout;
		return (<Layout className="layout">
			<Header style={{backgroundColor: '#DFDFDF', height: '5.5em'}}>
				<div style={{float:'left'}}>
					<img style={{height: '70px',  width: '70px', position: 'relative', float: 'left', marginTop: '0.5em'}} src='wolf.png' alt='wolf'></img>
					<b style={{color: 'black', marginLeft: '0.5em', float:'left', fontSize: '25px'}}>WOLF</b><b style={{color: 'red', float: 'left', fontSize: '25px'}}>CARE</b>
					<br></br>
					<p style={{color: 'black', float: 'left', fontSize: '15px', marginLeft: '1em', marginTop: '-2.5em'}}>Your pocket doctor</p>
				</div>
				<div style={{float: 'right'}}>
					<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', float: 'left', marginRight: '1em', marginTop: '1.5em'}}><p style={{float: 'left', marginTop: '0.5em'}}>Login</p></Button>
					<Button shape='round' size='small' style={{height: '40px', position: 'relative', float: 'left', marginTop: '1.5em'}}><p style={{float: 'left', marginTop: '0.5em'}}>Join Now</p></Button>
				</div>
				<Menu
					style={{backgroundColor: '#DFDFDF', float: 'right', marginRight: '3em', marginTop: '0.5em'}}
					mode="horizontal"
					defaultSelectedKeys={['home']}
					items={[
						{
							key: 'home',
							label: 'Home'
						},
						{
							key: 'listDoctors',
							label: 'Doctors'
						},
						{
							key: 'listHospitals',
							label: 'Hospitals'
						},
						{
							key: 'bookAppointment',
							label: 'Book appointment'
						},
						{
							key: 'about',
							label: 'About us'
						},
						{
							key: 'contact',
							label: 'Contact us'
						}
					]}
					disabledOverflow={true}
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
								<img src='slider5.jpeg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
								<div className="container" style={{position: 'absolute', width: '40%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
									<div className="signin-content">
										<div className="signin-image" style={{width: '350px', marginTop: '70px', marginLeft: '30px'}}>
											<figure><img src="doc2.jpg" alt="sign in" /></figure>
										</div>
										<div className="signin-form" style={{marginTop: '80px', marginLeft: '20px'}}>
											<h2>Looking for a doctor?</h2>
											<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}}><p style={{float: 'left', marginTop: '0.5em'}}>Find doctor</p></Button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item style={{height: '650px'}}>
							<div>
								<img src='slider6.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
								<div className="container" style={{position: 'absolute', width: '40%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
									<div className="signin-content">
										<div className="signin-image" style={{width: '350px', marginTop: '70px', marginLeft: '30px'}}>
											<figure><img src="hospital1.jpg" alt="sign in" /></figure>
										</div>
										<div className="signin-form" style={{marginTop: '80px', marginLeft: '20px'}}>
											<h2>Looking for a hospital?</h2>
											<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}}><p style={{float: 'left', marginTop: '0.5em'}}>Find hospital</p></Button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item style={{height: '650px'}}>
							<div>
								<img src='slider4.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
								<div className="container" style={{position: 'absolute', width: '40%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
									<div className="signin-content">
										<div className="signin-image" style={{width: '350px', marginTop: '70px'}}>
											<figure><img src="appointment.jpg" alt="sign in" /></figure>
										</div>
										<div className="signin-form" style={{marginTop: '80px', marginLeft: '20px'}}>
											<h2>Book an appointment anytime, anywhere</h2>
											<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}}><p style={{float: 'left', marginTop: '0.5em'}}>Book appointment</p></Button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item style={{height: '650px'}}>
							<div>
								<img src='slider1.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
								<div className="container" style={{position: 'absolute', width: '40%', height: '50%', top: '25%', right: '30%', opacity: '90%'}}>
									<div className="signin-content">
										<div className="signin-image" style={{width: '200px', marginTop: '30px'}}>
											<figure><img src="doc1.jpg" alt="sign in" /></figure>
										</div>
										<div className="signin-form" style={{marginTop: '70px', marginLeft: '20px'}}>
											<h2>Are you a Doctor?</h2>
											<h1><b>Join our team</b></h1>
											<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}}><p style={{float: 'left', marginTop: '0.5em'}}>Join as Doctor</p></Button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item style={{height: '650px'}}>
							<div>
								<img src='slider3.jpg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
								<div className="container" style={{position: 'absolute', width: '40%', height: '50%', top: '25%', right: '20%', opacity: '90%'}}>
									<div className="signin-content">
										<div className="signin-image" style={{width: '200px', marginTop: '80px'}}>
											<figure><img src="hospital.jpg" alt="sign in" /></figure>
										</div>
										<div className="signin-form" style={{marginTop: '70px', marginLeft: '20px'}}>
											<h2>Represent a hospital?</h2>
											<h1><b>Join our team</b></h1>
											<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '20px', marginLeft: '50px'}}><p style={{float: 'left', marginTop: '0.5em'}}>Add hospital</p></Button>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>
			</Content>
			<Footer style={{paddingTop: '1em', height: '10px', backgroundColor:'#DFDFDF'}}>Copyright (c) 2022 Group 22</Footer>
		</Layout>);
	}
}

export default Wolfcare;
