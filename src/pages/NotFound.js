import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

import ButtonBackHome from '../components/ButtonBackHome';


const NotFound = () => {
    return (
        <Box>
            <Heading as="h1">404!</Heading>
            <Heading>We couldn't find that page</Heading>
            <ButtonBackHome />
        </Box>
    )
}

export default NotFound;