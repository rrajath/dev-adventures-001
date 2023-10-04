import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getMovie } from '../utils/movies';
import { Box, Flex, Text } from '@chakra-ui/react';

export function loader({ params }) {
  const movie = getMovie(params.movieId);
  return movie;
}

export default function MoviePage() {
  const movie: any = useLoaderData();
  return (
    <Flex>
      <Box flex={'10'}>
        <Text fontSize={'4xl'} mb={8}>{movie.title} ({movie.releaseDate})</Text>
        <Text mb={8}>{movie.overview}</Text>
      </Box>
      <Box flex={'1'}>
        <Text fontSize={'4xl'}>{movie.rating}</Text>
      </Box>
    </Flex>
  );
}
