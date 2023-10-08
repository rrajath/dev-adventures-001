import { Box, Divider, Text } from "@chakra-ui/react";
import { Movie } from "../utils/types";
import { NavLink } from "react-router-dom";

interface FavoriteMoviesProps {
  movies: Movie[];
}

export default function FavoriteMovies({movies}: FavoriteMoviesProps) {
  const favorites = movies.filter((m: Movie) => m.favorite);
  if (favorites.length === 0) {
    return (
      <Box></Box>
    );
  }
  return (
    <Box color={'#344e41'}>
      <Text textAlign={'center'} fontSize={'xl'} mb={4}>Favorite Movies</Text>
        <Box>
          {favorites.map((movie: any) => (
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
      <Divider/>
    </Box>
  );
}