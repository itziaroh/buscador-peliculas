import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/core';

const ButtonBackHome = () => {
	return (
		<Link to='/'>
			<Button variantColor="green" borderColor="green.500" my={12}>Back to Home</Button>
		</Link>
	)
}

export default ButtonBackHome;