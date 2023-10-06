import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { getMovie } from '../utils/movies';
import { Box, Flex, Text } from '@chakra-ui/react';

export function loader({ params }) {
  const movie = getMovie(params.movieId);
  return movie;
}

export default function MoviePage() {
  const movie: any = useLoaderData();
  return (
    <Flex p={12} direction={'column'}>
      <Flex direction={'column'} color={'#344e41'}>
        <Box alignSelf={'end'}>
          <NavLink to={`/movies/${movie.id}/edit`}>edit</NavLink>
        </Box>
      </Flex>
      <Flex color={'#344e41'}>
        <Box flex={'10'}>
          <Text fontSize={'4xl'} mb={8}>{movie.title} ({getReleaseYear(movie.releaseDate)})</Text>
          <Text mb={8}>{movie.overview}</Text>
        </Box>
        <Box flex={'1'}>
          <Text fontSize={'4xl'}>{movie.rating}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

function getReleaseYear(releaseDate: string) {
  return releaseDate.split('-')[0];
}
