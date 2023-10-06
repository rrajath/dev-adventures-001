import { Form, redirect, useLoaderData } from 'react-router-dom';
import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import { updateMovie } from '../utils/movies';

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  updateMovie(updates, params.movieId);
  return redirect(`/movies/${params.movieId}`);
}

export default function EditMovie() {
  const movie: any = useLoaderData();
  return (
    <Box color={'#344e41'}>
    <Text fontSize={'4xl'} mb={8}>Edit Movie</Text>
    <Flex>
      <Box>
      <Form method='post'>

        <Text fontWeight={'bold'}>Title</Text>
        <Input
          type='text'
          name='title'
          width={'sm'}
          defaultValue={movie.title}
          className='new-movie-page-input'
          border={'1px solid #344e41'}
          color='black'
          focusBorderColor='black'
          _hover={{ borderColor: 'black' }}
          mb={8} />

        <Text fontWeight={'bold'}>Overview</Text>
        <Textarea
          name='overview'
          width={'xl'}
          defaultValue={movie.overview}
          className='new-movie-page-input'
          border={'1px solid #344e41'}
          color='black'
          focusBorderColor='black'
          _hover={{ borderColor: 'black' }}
          mb={8}
          />

        <Text fontWeight={'bold'}>Release Date</Text>
        <Input
          type='date'
          name='releaseDate'
          width={'auto'}
          defaultValue={movie.releaseDate}
          className='new-movie-page-input'
          border={'1px solid #344e41'}
          color='black'
          focusBorderColor='black'
          _hover={{ borderColor: 'black' }}
          mb={8}
          />

        <Text fontWeight={'bold'}>Rating</Text>
        <Input
          type='text'
          name='rating'
          width={'xs'}
          defaultValue={movie.rating}
          className='new-movie-page-input'
          border={'1px solid #344e41'}
          color='black'
          focusBorderColor='black'
          _hover={{ borderColor: 'black' }}
          mb={8}
          />

        <br/>
        <br/>
        <Button type='submit' value='Submit' width={'xs'} bg={'#3a86ff'}>Submit</Button>
      </Form>
      </Box>
    </Flex>
  </Box>
  );
};
