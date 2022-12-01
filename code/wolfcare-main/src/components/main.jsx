import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Button} from 'antd';

class MainPage extends React.Component {
	render() {
		return (
			<div style={{marginTop: '0em', height: '650px', backgroundColor: 'black'}}>
				<Carousel
					indicators={false}
					interval={null}
					keyboard={true}
					prevIcon={<span aria-hidden='true' className='carousel-control-prev-icon' style={{marginLeft: '-10em'}}/>}
					nextIcon={<span aria-hidden='true' className='carousel-control-next-icon' style={{marginLeft: '10em'}}/>}
				>
					<Carousel.Item style={{height: '650px'}}>
						<div>
							<img src='../slider5.jpeg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
							<div className='container' style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
								<div>
									<div style={{width: '250px', marginTop: '80px', marginLeft: '30px', float: 'left'}}>
										<figure><img src='../doc2.jpg' alt='sign in' /></figure>
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
							<div className='container' style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
								<div>
									<div style={{width: '250px', marginTop: '80px', marginLeft: '30px', float: 'left'}}>
										<figure><img src='../hospital1.jpg' alt='sign in' /></figure>
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
							<div className='container' style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '50%', opacity: '90%'}}>
								<div>
									<div style={{width: '250px', marginTop: '60px', marginLeft: '30px', float: 'left'}}>
										<figure><img src='../appointment.jpg' alt='sign in' style={{height: '200px', marginLeft: '10px', float: 'left'}}/></figure>
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
							<div className='container' style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '30%', opacity: '90%'}}>
								<div>
									<div style={{width: '250px', marginTop: '60px', marginLeft: '30px', float: 'left'}}>
										<figure><img src='../doc1.jpg' alt='sign in' style={{width: '180px', height: '180px'}}/></figure>
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
							<div className='container' style={{position: 'absolute', width: '42%', height: '50%', top: '25%', right: '20%', opacity: '90%'}}>
								<div>
									<div style={{width: '250px', marginTop: '80px', marginLeft: '30px', float: 'left'}}>
										<figure><img src='../hospital.jpg' alt='sign in' /></figure>
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
		);
	}
}

export default MainPage;
