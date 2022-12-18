import { Button, Flex, FormControl, FormHelperText, FormLabel, HStack, Text, VStack } from "@chakra-ui/react";
import * as React from "react";

import { PinInput, PinInputField } from '@chakra-ui/react'
import { LockIcon} from '@chakra-ui/icons'



export default function Otp() {
  return (
    <Flex p="48" h='100vh' textAlign={'center'}  justify="center" backgroundColor={'#FAFAFA'}  align="center" w="full" >
      <FormControl justifyContent="spaceBetween"
          alignItems="center" m='auto'  borderRadius={'8'} p={9} w="100" style={{"boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            
<LockIcon p='2' w={'4rem'} h={'4rem'} borderRadius={'full'} backgroundColor={"gray.200"} color="red.500" />
            <VStack m={2} textAlign="center">
      <Text fontSize={'xl'} as='b'>Please enter the one time password
 to verify your account </Text>
 <Text fontSize={'lg'}>Please enter the verification code sent to your mobile</Text>
 </VStack>
 <HStack justify="center" >
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
        <Button  fontSize={'xl'} onClick={()=>alert('Your order has been successfully placed')} m={2}>Submit</Button>
      </FormControl>
    </Flex>
  ); 
}