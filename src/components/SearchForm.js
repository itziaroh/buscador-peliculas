import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Box, Flex } from '@chakra-ui/core';

import { searchMoviesStart } from '../redux/search/search.actions';

const SearchForm = () => {

	const [searchText, setSearchText] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setSearchText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchMoviesStart(searchText));
	}

	return (
		<form onSubmit={handleSubmit}>
			<Flex>
				<Box>
					<Input
						onChange={handleChange}
						type="text"
						placeholder="Try with Pulp Fiction"
						value={searchText}
						focusBorderColor="green.400"
						borderColor="green.500"
					/>
				</Box>
				<Box>
					<Button variantColor="green" borderColor="green.500">
						Search
          </Button>
				</Box>
			</Flex>
		</form>
	)
};

export default SearchForm;