import React from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Input, Text } from '@chakra-ui/react';

function Login() {
  return (
    <Box>
      <Flex alignItems='center' justifyContent='flex-end' mx='8'>
        <Box w='500px' mt='16'>
          <Card py='4' shadow='md'>
            <CardHeader mt='-6' bg='gray.50'>
              <Text fontSize='xl' fontWeight='bold'>Login / Register</Text>
            </CardHeader>
            <CardBody mt='3'>
              <Input placeholder='Email Mobile Number' />
            </CardBody>
            <CardFooter mt='-4'>
              <Button w='100%' colorScheme='red'>Proceed</Button>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </Box>
  )
}

export default Login
