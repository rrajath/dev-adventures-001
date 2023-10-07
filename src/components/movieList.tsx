import { Box } from '@chakra-ui/react';
import React from 'react';
import { Movie } from '../utils/types';
import { NavLink } from 'react-router-dom';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <Box>
      { movies.length === 0 ?
        <Box textAlign={'center'} mt={8}>No Movies</Box> :
        movies.map((movie: any) => (
          <NavLink
          key={movie.id}
          to={`/movies/${movie.id}`}
          className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {movie.title}
          </NavLink>
        ))
      }
    </Box>
  );
}
