import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCartFill, BsFillFilePlusFill, BsFillMicFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Hamburger } from "../NavComponents/Hamburger";
import Dropdown from "../NavComponents/Dropdown";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "../NavComponents/Searchbar";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { data } = useSelector(state => state.auth)
  console.log(data)

  return (
    <Box
      position={"fixed"}
      top="0"
      left={"0"}
      right="0"
      width="100%"
      zIndex={99}
  
     
    >
      <Box display={["none", "none", "none", "block"]}>
        <Box bgColor="#e42529" maxW={"full"}>
          <Flex flexDirection={"row-reverse"} p={2} pr={4}>
            <Flex
              fontWeight={"semibold"}
              color={"white"}
              gap="20px"
              fontSize={"15px"}
            >
              <Text>Find a Store</Text>
              <Text>|</Text>
              <Text>Wishlist</Text>
              <Text>|</Text>
              <Text>Contact Us</Text>
            </Flex>
          </Flex>
        </Box>

        <Box bgColor="#e42529">
          <Flex
            gap="60px"
            alignItems={"center"}
            justifyContent="space-between"
            pl={"30px"}
            pr={"30px"}
          >
            <RouterLink to="/">
              <Image
                mb={2}
                src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                alt="logo"
              />
            </RouterLink>
            <Box>
              <SearchBar/>
            </Box>
            <Flex
              gap={"30px"}
              color={"white"}
              fontSize={"15px"}
              fontWeight={"semibold"}
            >
              {data.isAuthenticated ? (
                <Flex gap={"20px"} alignItems="center">
                  <Text noOfLines={1}>Hi, {data.user.firstName === undefined ? "user" : data.user.firstName} </Text>
                  <Text>|</Text>
                </Flex>
              ) : (
                <Flex gap={"20px"} alignItems="center">
                  <Text noOfLines={1}> Hi, user </Text>
                  <Text>|</Text>
                </Flex>
              )}
              <Link to="/cart">
                <Flex gap={"5px"} alignItems="center">
                  <BsCartFill /> Cart
                </Flex>
              </Link>
              {isAuth ? (
                <Flex
                  gap={"5px"}
                  alignItems="center"
                  cursor="pointer"
                >
                  <MdAccountCircle /> Logout
                </Flex>
              ) : (
                <Link to="/login">
                  <Flex gap={"5px"} alignItems="center">
                    <MdAccountCircle /> Login
                  </Flex>
                </Link>
              )}
            </Flex>
          </Flex>
        </Box>
        <Dropdown />
      </Box>

      <Box
        bgColor="#e42529"
        pl={4}
        pr={4}
        pt={3}
        pb={3}
        display={["block", "block", "block", "none"]}
      >
        <Flex
          alignItems={"center"}
          color="white"
          justifyContent={"space-between"}
        >
          <Flex gap={"20px"} alignItems="center" justifyContent={"center"}>
            <Hamburger />
            <RouterLink to="/">
              <Image
                width={{ base: '50px', md: '100px', lg: '120px' }}
                height={"35px"}
                src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                alt="logo"
              />
            </RouterLink>
          </Flex>
         
      
        <Box ml={"-150px"} >
        <SearchBar/>
        </Box>

       

          <Flex justifyContent="space-between" gap={"20px"}>
            <BsFillFilePlusFill size={"20px"} />
            <Link to="/cart">
              <FaShoppingCart size={"20px"} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
