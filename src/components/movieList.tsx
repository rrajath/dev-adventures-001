import { Box, Text } from '@chakra-ui/react';
import { Movie } from '../utils/types';
import { NavLink } from 'react-router-dom';
import FavoriteMovies from './favoriteMovies';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <Box>
      <FavoriteMovies movies={movies}/>
      { movies.length === 0 ? <Box textAlign={'center'} mt={8}>No Movies</Box> :
        <Text fontSize={'xl'} color={'#344e41'} textAlign={'center'} mt={8}>All Movies</Text> }
        {movies.map((movie: any) => (
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
