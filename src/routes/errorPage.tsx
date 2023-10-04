import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'} flexDirection={'column'}>
      <Box className='error-title'>Error Page</Box>
      <Box className='error-details'>{error.statusText || error.message}</Box>
    </Flex>
  );
}

export default ErrorPage;
