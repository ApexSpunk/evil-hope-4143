import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../Redux/auth/actions";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const { userRegister } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (
    userRegister &&
    userRegister?.message?.message === "user already exists"
  ) {
    toast({
      title: "Account exists.",
      description: `user already exists please login`,
      status: "warning",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
    return navigate("/login");
  } else if (userRegister?.message?.message === "user created successfully") {
    toast({
      title: "Account created.",
      description: `Your account successfully created`,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
   return navigate("/login");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  async function handleClick() {
    try {
      if (
        userData.firstName === "" ||
        userData.lastName === "" ||
        userData.email === "" ||
        userData.password === "" ||
        userData.mobile === ""
      ) {
        toast({
          title: "Empty field.",
          description: `Please fill all fields`,
          status: "warning",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      } else {
        dispatch(authRegister(userData));
      }
    } catch (e) {}
  }

  return (
    <Box mt={{ base: "100px", md: "100px", lg: "150px" }}>
      <Flex alignItems="center" justifyContent="center" mx="8">
        <Box w="550px" mt="16">
          <Card py="4" shadow="md">
            <CardHeader mt="-6" bg="gray.50">
              <Text fontSize="xl" fontWeight="bold">
                Register New Account
              </Text>
            </CardHeader>
            <CardBody mt="2">
              <Input
                required
                name="firstName"
                onChange={handleChange}
                type="text"
                placeholder="First Name"
              />
              <Input
                required
                name="lastName"
                onChange={handleChange}
                mt="4"
                type="text"
                placeholder="Last Name"
              />
              <Input
                required
                name="email"
                onChange={handleChange}
                mt="4"
                type="email"
                placeholder="Email Address"
              />
              <Input
                required
                name="password"
                onChange={handleChange}
                mt="4"
                type="password"
                placeholder="Enter Password"
              />
              <Text mx="1" mt="1" fontSize="xs" color="gray.500">
                Your email address will be used to send order invoice, order
                updates etc.
              </Text>
              <Button
                variant="outline"
                mt="6"
                opacity="0.7"
                w="150px"
                rounded="4px"
                colorScheme="red"
              >
                Verify Email
              </Button>
              <Input
                required
                type="number"
                name="mobile"
                onChange={handleChange}
                mt="10"
                placeholder="Mobile Number"
              />
              <Text mx="1" mt="1" fontSize="xs" color="gray.500">
                Your mobile number will be used to avail benefits such as Jio
                Mart Cashback and ROne Loyality Points and receive quick
                notifications.
              </Text>
            </CardBody>
            <CardBody mt="-4">
              <Button onClick={handleClick} w="100%" colorScheme="red">
                Proceed
              </Button>
              <Text
                mx="1"
                mt="4"
                textAlign="center"
                fontSize="md"
                color="gray.500"
              >
                Already Registered?{" "}
                <Link to={"/login"}>
                  <Text as="span" textColor="red">
                    LOGIN
                  </Text>
                </Link>
              </Text>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
}

export default Register;
