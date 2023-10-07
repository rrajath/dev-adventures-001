import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { getMovie } from '../utils/movies';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

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
          <Form action='edit'>
            <Button type='submit'>edit</Button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
            >
            <Button type='submit'>delete</Button>
          </Form>
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
