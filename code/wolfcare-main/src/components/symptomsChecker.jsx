import React from 'react';

const iframe = () => {
	return {
		__html: '<iframe src="../medical-rules/index.html" width="100%" height="650"></iframe>'
	};
};

class SymptomsChecker extends React.Component {
	render() {
		return (
			<div>
				<div dangerouslySetInnerHTML={iframe()} />
			</div>
		);
	}
}

export default SymptomsChecker;
