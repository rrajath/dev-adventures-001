import { getMovies } from '../utils/movies';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Box, Button, Divider } from '@chakra-ui/react';
import MovieList from './movieList';
import SearchBox from './SearchBox';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const movies = getMovies(q);
  return movies;
}

export default function Sidebar() {
  const movies: any = useLoaderData();
  return (
    <Box p={4} id='sidebar'>
      <SearchBox/>
      <Button as={NavLink} to={'/movies/new'} shadow={'2xl'} color={'white'} background={'#344e41'}>
        New Movie
      </Button>
      <Divider mt={4} mb={8}/>
      <MovieList movies={movies} />
    </Box>
  );
}
