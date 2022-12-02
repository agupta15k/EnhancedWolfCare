import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Button} from 'antd';

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.setTab = props.setTab;
		this.redirectToPath = props.redirectToPath;
		this.setRegisterClicked = props.setRegisterClicked;
	}

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
							<img src='../slider4.jpg' alt='third-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
							<div className='container' style={{position: 'absolute', width: '45%', height: '50%', top: '25%', right: '45%', opacity: '90%'}}>
								<div>
									<figure style={{width: '50%', marginTop: '8%', marginLeft: '3%', paddingLeft: '5%', float: 'left'}}><img src='../appointment.jpg' alt='appointment' style={{height: '200px', marginLeft: '10px', float: 'left'}}/></figure>
									<h2 style={{width:'43%', marginTop: '15%', float: 'right'}}>Book an appointment anytime, anywhere</h2>
									<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '2%', marginLeft: '10%'}} onClick={() => this.setTab('doctors')}><p style={{float: 'left', marginTop: '0.5em'}}>Book appointment</p></Button>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item style={{height: '650px'}}>
						<div>
							<img src='../slider5.jpeg' alt='first-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
							<div className='container' style={{position: 'absolute', width: '45%', height: '50%', top: '25%', right: '45%', opacity: '90%'}}>
								<div>
									<figure style={{width: '50%', marginTop: '8%', marginLeft: '3%', float: 'left'}}><img src='../doc2.jpg' alt='doc2' /></figure>
									<h2 style={{width:'43%', marginTop: '15%', float: 'right'}}>Looking for a doctor?</h2>
									<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '2%', marginLeft: '15%'}} onClick={() => this.setTab('doctors')}><p style={{float: 'left', marginTop: '0.5em'}}>Find doctor</p></Button>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item style={{height: '650px'}}>
						<div>
							<img src='../slider6.jpg' alt='second-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
							<div className='container' style={{position: 'absolute', width: '45%', height: '50%', top: '25%', right: '45%', opacity: '90%'}}>
								<div>
									<figure style={{width: '50%', marginTop: '8%', marginLeft: '3%', float: 'left'}}><img src='../hospital1.jpg' alt='hospital1' /></figure>
									<h2 style={{width:'43%', marginTop: '15%', float: 'right'}}>Looking for a hospital?</h2>
									<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '2%', marginLeft: '15%'}} onClick={() => this.setTab('hospitals')}><p style={{float: 'left', marginTop: '0.5em'}}>Find hospital</p></Button>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item style={{height: '650px'}}>
						<div>
							<img src='../slider1.jpg' alt='fourth-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
							<div className='container' style={{position: 'absolute', width: '45%', height: '50%', top: '25%', right: '25%', opacity: '90%'}}>
								<div>
									<figure style={{width: '40%', marginTop: '8%', marginLeft: '3%', float: 'left'}}><img src='../doc1.jpg' alt='doc1' style={{width: '180px', height: '180px'}}/></figure>
									<h2 style={{width:'43%', marginTop: '15%', float: 'right'}}>Are you a Doctor?</h2>
									<h1 style={{width:'43%', marginRight: '5%', float: 'right'}}><b>Join our team</b></h1>
									<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '2%', marginLeft: '20%'}} onClick={() => this.setRegisterClicked(true)}><p style={{float: 'left', marginTop: '0.5em'}}>Join as Doctor</p></Button>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item style={{height: '650px'}}>
						<div>
							<img src='../slider3.jpg' alt='fifth-slider' style={{width: '100%', height: '650px', opacity: '40%'}}></img>
							<div className='container' style={{position: 'absolute', width: '45%', height: '50%', top: '25%', right: '25%', opacity: '90%'}}>
								<div>
									<figure style={{width: '40%', marginTop: '8%', marginLeft: '3%', float: 'left'}}><img src='../hospital.jpg' alt='sign in' /></figure>
									<h2 style={{width:'43%', marginTop: '15%', marginRight: '5%', float: 'right'}}>Represent a hospital?</h2>
									<h1 style={{width:'43%', marginRight: '5%', float: 'right'}}><b>Join our team</b></h1>
									<Button shape='round' type='primary' size='small' style={{height: '40px', position: 'relative', marginTop: '2%', marginLeft: '20%'}} onClick={() => this.setRegisterClicked(true)}><p style={{float: 'left', marginTop: '0.5em'}}>Add hospital</p></Button>
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
