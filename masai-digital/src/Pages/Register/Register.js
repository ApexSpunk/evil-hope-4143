import React from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Input, Text } from '@chakra-ui/react';

function Register() {
    return (
        <Box>
            <Flex alignItems='center' justifyContent='center' mx='8'>
                <Box w='550px' mt='16'>
                    <Card py='4' shadow='md'>
                        <CardHeader mt='-6' bg='gray.50'>
                            <Text fontSize='xl' fontWeight='bold'>Register New Account</Text>
                        </CardHeader>
                        <CardBody mt='2'>
                            <Input placeholder='First Name' />
                            <Input mt='4' placeholder='Last Name' />
                            <Input mt='4' placeholder='Email Address' />
                            <Text mx='1' mt='1' fontSize='xs' color='gray.500'>Your email address will be used to send order invoice, order updates etc.</Text>
                            <Button variant='outline' mt='6' opacity='0.7' w='150px' rounded='4px' colorScheme='red'>Verify Email</Button>
                            <Input mt='10' placeholder='Mobile Number' />
                            <Text mx='1' mt='1' fontSize='xs' color='gray.500'>Your mobile number will be used to avail benefits such as Jio Mart Cashback and ROne Loyality Points and receive quick notifications.</Text>
                        </CardBody>
                        <CardBody mt='-4'>
                            <Button w='100%' colorScheme='red'>Proceed</Button>
                            <Text mx='1' mt='4' textAlign='center' fontSize='md' color='gray.500'>Already Registered? <Text as='span' textColor='red'>LOGIN</Text></Text>
                        </CardBody>
                    </Card>
                </Box>
            </Flex>
        </Box>
    )
}

export default Register
