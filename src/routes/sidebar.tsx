import React from 'react';
import { getMovies } from '../utils/movies';
import { Link, useLoaderData } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export function loader() {
  return getMovies();
}

export default function Sidebar() {
  const movies: any = useLoaderData();
  return (
    <Box dropShadow={'lg'}>
      {movies.map((movie: any) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      ))}
    </Box>
  );
}
