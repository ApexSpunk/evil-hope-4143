import React, { useEffect } from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Input, Text, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, authVerify } from '../../Redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import { AUTH_LOGIN_RESET } from '../../Redux/auth/actionTypes';


function Login() {

  const [registered, setRegistered] = React.useState(false);
  const [userData, setUserData] = React.useState({ email: '', otp: '' });
  const dispatch = useDispatch();
  const { userLogin: { loading, error, message } } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    dispatch({ type: AUTH_LOGIN_RESET });
  }, [])

  const handleLogin = () => {
    dispatch(authLogin({ email: userData.email }));
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (message == 'You are not registered please register'){
      navigate('/register');
    }else if (message == 'Otp already generated' || message == 'OTP has been sent to your email'){
      setRegistered(true);
      toast({ 
        title: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }else if(message == 'login success'){
      navigate('/');
    }
    if(error){
      toast({ 
        title: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [message,error])

  return (
    <Box>
      <Flex alignItems='center' justifyContent='flex-end' mx='8'>
        <Box w='500px' mt='16'>
          <Card py='4' shadow='md'>
            <CardHeader mt='-6' bg='gray.50'>
              <Text fontSize='xl' fontWeight='bold'>Login / Register</Text>
            </CardHeader>
            <CardBody mt='3'>
              <Input placeholder='Enter Your Email' name='email' value={userData.email} onChange={handleChange} />
              {
                registered && <Input mt='5' placeholder='Enter OTP' name='otp' value={userData.otp} onChange={handleChange} />
              }
            </CardBody>
            <CardFooter mt='-4'>
              <Button w='100%' colorScheme='red' onClick={registered ? () => {
                userData.otp.length < 5 ? toast({ title: 'Please enter OTP', status: 'error', duration: 3000, isClosable: true, }) : dispatch(authVerify({ email: userData.email, otp: userData.otp }));
              } : handleLogin}>{registered ? 'Verify' : 'Proceed'}</Button>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </Box>
  )
}

export default Login
