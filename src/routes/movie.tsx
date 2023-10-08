import { useLoaderData } from 'react-router-dom';
import { getMovie, updateMovie } from '../utils/movies';
import { Box, Flex, Text } from '@chakra-ui/react';
import Actions from '../components/actions';

export function loader({ params }) {
  const movie = getMovie(params.movieId);
  return movie;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  return updateMovie({
    favorite: formData.get('favorite') === 'true',
  }, params.movieId);
}

export default function MoviePage() {
  const movie: any = useLoaderData();
  return (
    <Flex p={12} direction={'column'}>
      <Actions favorite={movie.favorite}/>
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
