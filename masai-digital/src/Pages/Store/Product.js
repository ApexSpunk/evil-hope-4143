import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPrinter, BsShare } from "react-icons/bs";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Redux/products/actions";
import {
  addProductToCart,
  getCart,
  removeProductFromCart,
} from "../../Redux/cart/actions";

function Product() {
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getCart());
  }, [id]);

  const dispatch = useDispatch();
  const {
    singleProduct,
    getProduct: { loading, error },
  } = useSelector((state) => state.product);
  const {
    data: { isAuthenticated },
  } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.cart);
  const toast = useToast();

  var product = carts.find((product) => product.productId._id === id);
  console.log(singleProduct.images);

  return (
    <Box ml="8"  mt={{ base: '100px', md: '150px', lg: '200px' }} mb="8">
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          templateRows="90vh"
          alignItems="center"
        >
          <GridItem colSpan={1}>
            <Image src={singleProduct.images[0]} />
            <Flex mt="8" justifyContent="space-between">
              {singleProduct.images?.slice(1, 4).map((image, index) => (
                <Image key={index} src={image} h="96px" w="96px" />
              ))}
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem
                colSpan={2}
                mb="-4"
                boxSizing="border-box"
                rounded="none"
                border="1px solid #e2e8f0"
                p="4"
              >
                <Text fontSize="sm">
                  Article ID: {singleProduct._id.slice(4, 14)}
                </Text>
                <Text fontSize="22px" mt="4" fontWeight="bold">
                  {singleProduct.title}
                </Text>
                <Flex mt="4" align="center" gap="4">
                  <Checkbox colorScheme="green">Add to Compare |</Checkbox>
                  <BsShare size="20px" />
                  <BsPrinter size="20px" /> Print
                </Flex>
              </GridItem>
              <GridItem
                colSpan={1}
                boxSizing="border-box"
                mt="4"
                border="1px solid #e2e8f0"
                p="4"
              >
                <Text fontSize="lg" fontWeight="bold">
                  Save more with EMI/Cashback (1) Read T&C
                </Text>
                <Box ml="8" mt="4">
                  <ul>
                    <li>
                      EMIs (Credit Cards) from ₹575.67/month | View all Standard
                      Credit Cards EMI options
                    </li>
                  </ul>
                </Box>
                <Text fontSize="lg" mt="6" fontWeight="bold">
                  Warranty
                </Text>
                <Box ml="8" mt="4">
                  <ul>
                    <li>Warranty: 1 Year manufacturer warranty</li>
                  </ul>
                </Box>
                <Text fontSize="lg" mt="6" fontWeight="bold">
                  Key Features
                </Text>
                <Box ml="8" mt="4">
                  <ul>
                    <li>
                      {singleProduct.brand} Has Blockbuster Games, HD Movies And
                      Controller-Free Fun For Everyone
                    </li>
                    <li>Built-In Wi-Fi For Easy Connection To Xbox LIVE</li>
                    <li>
                      Super Quiet With Sleek New Design Plus Matching Controller
                    </li>
                    <li>Ready For The Controller-Free Fun Of Kinect</li>
                  </ul>
                </Box>
                <Text fontSize="lg" mt="6" fontWeight="bold">
                  Return Policy
                </Text>
                <Box ml="8" mt="4">
                  <ul>
                    <li>
                      Items are eligible for return within 7 Days of Delivery.
                      Read T&C
                    </li>
                    <li>
                      All accessories, product & packaging need to be returned
                      in original condition.
                    </li>
                  </ul>
                </Box>
              </GridItem>
              <GridItem
                colSpan={1}
                mt="4"
                boxSizing="border-box"
                rounded="none"
                border="1px solid #e2e8f0"
                p="4"
              >
                <Text fontSize="2xl" color="blue.700" fontWeight="bold">
                  ₹
                  {singleProduct.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
                <Text fontSize="md" mt="4">
                  MRP:{" "}
                  <b>
                    ₹
                    {singleProduct.mrp
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </b>{" "}
                  (Inclusive of all taxes)
                </Text>
                <Text fontSize="lg" color="green.600" mt="2" fontWeight="bold">
                  You Save:{" "}
                  {Math.round(
                    ((singleProduct.mrp - singleProduct.price) /
                      singleProduct.mrp) *
                      100
                  )}
                  %(₹
                  {singleProduct.saveprice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  )
                </Text>
                <Text fontSize="sm" mt="2" fontWeight="semibold">
                  EMIs (Credit Cards) from ₹575.67/month |{" "}
                  <Text as="span" color="blue.500">
                    View Plans
                  </Text>
                </Text>
                <Text fontSize="lg" mt="2" fontWeight="semibold">
                  FREE Shipping!
                </Text>
                <Input
                  name="pincode"
                  width="60%"
                  mt="4"
                  placeholder="Enter Pincode"
                />
                <Flex>
                  <Button
                    mt="4"
                    colorScheme="red"
                    w="full"
                    variant="solid"
                    onClick={() => {
                      if (!isAuthenticated) {
                        toast({
                          title: "You are not logged in",
                          description: "Please login to add product to cart",
                          status: "warning",
                          duration: 2000,
                          isClosable: true,
                        });
                      } else {
                        dispatch(addProductToCart(id));
                        // find product in cart

                        // if product is in cart
                        if (product) {
                          toast({
                            title: `${singleProduct.title} is already in your cart.`,
                            description: "We have updated the quantity.",
                            status: "warning",
                            duration: 2000,
                            isClosable: true,
                          });
                        } else {
                          toast({
                            title: `${singleProduct.title} is added to your cart.`,
                            description: "Please check your cart.",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                          });
                        }
                      }
                    }}
                    bg={product ? "green.500" : "red.500"}
                    _hover={product ? { bg: "green.600" } : { bg: "red.600" }}
                  >
                    {product ? "ADD AGAIN" : "ADD TO CART"}
                  </Button>
                  {product ? (
                    <Button
                      mt="4"
                      ml="4"
                      colorScheme="red"
                      w="full"
                      variant="solid"
                      onClick={() => {
                        dispatch(removeProductFromCart(product._id));
                        toast({
                          title: `${singleProduct.title} is removed from your cart.`,
                          description: "Please check your cart.",
                          status: "error",
                          duration: 2000,
                          isClosable: true,
                        });
                        product = null;
                      }}
                    >
                      REMOVE
                    </Button>
                  ) : (
                    <Button
                      mt="4"
                      ml="4"
                      colorScheme="orange"
                      w="full"
                      variant="solid"
                    >
                      BUY NOW
                    </Button>
                  )}
                </Flex>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default Product;
