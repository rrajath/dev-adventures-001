import { Box, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { Form, redirect } from 'react-router-dom';
import { createMovie } from '../utils/movies';

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  createMovie(updates);
  return redirect('/');
}

export default function NewMovie() {
  return (
    <Box>
      <Text fontSize={'4xl'} mb={8}>New Movie</Text>
      <Flex>
        <Box>
        <Form method='post'>
          <Input type='text' name='title' placeholder='Title' width={'sm'} />
          <br/>
          <br/>
          <Input type='text' name='overview' placeholder='Overview' width={'xl'} />
          <br/>
          <br/>
          <Input type='date' name='releaseDate' placeholder='Release Date' width={'auto'} size={'md'} />
          <br/>
          <br/>
          <Input type='text' name='rating' placeholder='Rating' width={'sm'} />
          <br/>
          <br/>
          <Input type='submit' value='Submit' width={'xs'}/>
        </Form>
        </Box>
      </Flex>
    </Box>
  );
}
