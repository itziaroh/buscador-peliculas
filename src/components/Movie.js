import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Flex, Grid, Text, Button } from "@chakra-ui/core";

const Movie = ({ id, poster, title, year }) => {

	return (
		<Box>
			<Image src={poster} alt={title} />
			<Box>
				<Flex justify="space-between" mt={3}>
					<Flex direction="column" alignItems="start" maxWidth={"65%"}>
						<Text textAlign="left">{title}</Text>
						<Text>{year}</Text>
					</Flex>
					<Grid gap={2} >
						<Button variantColor="green" borderColor="green.500">Add to Favs</Button>
						<Link to={`detail/${id}`}>
							<Button variantColor="green" borderColor="green.500">View detail</Button>
						</Link>
					</Grid>
				</Flex>
			</Box>
		</Box>
	)
}

export default Movie;
