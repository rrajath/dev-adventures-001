import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Form, redirect } from 'react-router-dom';
import { createMovie } from '../utils/movies';

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("🚀 ~ file: newMovie.tsx:9 ~ action ~ updates:", updates)
  createMovie(updates);
  return redirect('/');
}

export default function NewMovie() {
  return (
    <Box color={'#344e41'}>
      <Text fontSize={'4xl'} mb={8}>New Movie</Text>
      <Flex>
        <Box>
        <Form method='post'>

          <Text fontWeight={'bold'}>Title</Text>
          <Input
            type='text'
            name='title'
            width={'sm'}
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
}
