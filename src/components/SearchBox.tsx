import React from 'react';
import { Form, useSubmit } from 'react-router-dom';
import { Input } from '@chakra-ui/react';

export default function SearchBox() {
  const submit = useSubmit();

  return (
    <Form role='search'>
      <Input
        type="search"
        placeholder="Search movies"
        name='q'
        border={'1px solid #344e41'}
        color='black'
        focusBorderColor='black'
        _hover={{ borderColor: 'black' }}
        onChange={(event) => submit(event.currentTarget.form)}
      />
    </Form>
  );
};
