import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

export default function Actions() {
  return (
    <Flex mb={8} justifyContent={'center'}>
      <Box mr={4}>
        <Form action='edit'>
          <Button colorScheme='blue' type='submit'>Edit</Button>
        </Form>
      </Box>
      <Box mr={4}>
        <Form method='post' action='favorite'>
          <Button colorScheme='green' type='submit'>Favorite</Button>
        </Form>
      </Box>
      <Box>
        <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
            >
            <Button colorScheme='red' type='submit'>Delete</Button>
          </Form>
      </Box>
    </Flex>
  );
}

/*
      <Flex direction={'row'} alignContent={'center'} color={'#344e41'}>
        <Box alignSelf={'end'}>
          <Form action='edit'>
            <Button type='submit'>edit</Button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
            >
            <Button type='submit'>delete</Button>
          </Form>
        </Box>
      </Flex>
      */
