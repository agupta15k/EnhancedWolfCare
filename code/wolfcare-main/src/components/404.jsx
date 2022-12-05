import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './404.css';

class NotFound extends React.Component {
	render() {
		return (
			<div className="mainbox" style={{height: '650px', width: '100%'}}>
				<div className="err">4</div>
				<QuestionCircleOutlined className='far' style={{color: 'white'}}/>
				<div className="err2">4</div>
				<div className="msg" style={{marginTop: '2%'}}>Oops!! You were not supposed to see this</div>
				<div className="msg" style={{marginTop: '7%'}}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p style={{marginTop: '3%'}}>Return to <a className='a404' href="/home">home</a> and remember: <b>you have not seen anything!</b></p></div>
			</div>
		);
	}
}

export default NotFound;
