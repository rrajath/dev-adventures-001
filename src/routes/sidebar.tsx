import React from 'react';
import { getMovies } from '../utils/movies';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export function loader() {
  return getMovies();
}

export default function Sidebar() {
  const movies: any = useLoaderData();
  return (
    <Box dropShadow={'lg'} color={'white'} p={4} id='sidebar'>
      { movies.length === 0 ?
      <div>No Movies</div> :
      movies.map((movie: any) => (
        <NavLink
        key={movie.id}
        to={`/movies/${movie.id}`}
        className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {movie.title}
        </NavLink>
      ))}
    </Box>
  );
}
