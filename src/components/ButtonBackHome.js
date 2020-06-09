import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBackHome = () => {
	return (
		<Link
			to='/'
			className="button is-warning btn-back"
		>
			Back to Home
		</Link>
	)
}

export default ButtonBackHome;