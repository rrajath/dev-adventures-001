import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Form, useFetcher } from 'react-router-dom';

interface ActionsProps {
  favorite: boolean;
}

export default function Actions({ favorite }: ActionsProps) {
  const fetcher = useFetcher();
  return (
    <Flex mb={8} justifyContent={'center'}>
      <Box mr={4}>
        <Form action='edit'>
          <Button colorScheme='blue' type='submit'>Edit</Button>
        </Form>
      </Box>
      <Box mr={4}>
        <fetcher.Form method='post'>
          <Button
            name='favorite'
            value={favorite ? 'false' : 'true'}
            colorScheme='facebook'
            variant={favorite ? 'solid' : 'outline'}
            aria-label={
              favorite
                ? "Remove from favorites"
                : "Add to favorites"
            }
            type='submit'
            >
            {favorite ? "Favorited" : "Favorite"}
          </Button>
        </fetcher.Form>
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
