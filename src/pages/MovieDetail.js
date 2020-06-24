import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Image, Text, Box, Flex } from '@chakra-ui/core';

import ButtonBackHome from '../components/ButtonBackHome';
import { searchByIdStart } from '../redux/search/search.actions';
import { selectSingleMovie } from '../redux/search/search.selectors';

const MovieDetail = ({ match }) => {

	const dispatch = useDispatch();
	const movieResult = useSelector(selectSingleMovie);

	useEffect(() => {
		const movieId = match.params.id;
		dispatch(searchByIdStart(movieId));
	}, []);

	const { Title, Poster, Actors, Metascore, Plot, Genre, Runtime, Director } = movieResult;
	return (
		<div>
			<ButtonBackHome />
			<Heading>{Title}</Heading>
			<Flex
				direction={["column", "column", "row", "row"]}
				alignItems={["center", "center", "flex-start"]}
				mb="45px"
				mx={["10px", "10px", "30px"]}
			>
				<Image src={Poster} alt={Title} maxWidth="50%" />
				<Box textAlign="justify" py="10px" px="30px">
					<Text><strong>Score:</strong> {Metascore}</Text>
					<Text><strong>Director:</strong> {Director}</Text>
					<Text><strong>Genre:</strong> {Genre}</Text>
					<Text><strong>Runtime:</strong> {Runtime}</Text>
					<Text><strong>Cast:</strong> {Actors}.</Text>
					<Text><strong>Plot:</strong> {Plot}</Text>
				</Box>
			</Flex>
		</div>
	)
}

export default MovieDetail;