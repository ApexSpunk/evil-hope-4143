import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  GridItem,
  Text,
  Box,
  HStack,
  Image,
  Button,
  Select,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { getCart, removeProductFromCart, updateProductInCart } from '../../Redux/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCart())
  }, [])
  const { carts } = useSelector(state => state.cart)

  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(
      carts.reduce((acc, curr) => acc + Number(curr.productId.price) * curr.quantity, 0)
    );
  }, [carts]);
  console.log(carts);
  return (
    <SimpleGrid columns={[2, null, 7]} spacing="4">

      <GridItem colSpan={5} rowSpan={50}>
        {carts.length > 0 ? (
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {carts && carts.length > 0
                  ? carts.map(x => (
                    <Tr>
                      <Td>
                        <HStack>
                          <Image
                            w="50px"
                            h="50px"
                            borderRadius="full"
                            mr="4"
                            src={x.productId.images[0]}
                          ></Image>
                          <Text>{x.productId.title.slice(0,30)}...</Text>
                        </HStack>
                      </Td>
                      <Td>₹ {x.productId.price}</Td>

                      <Td>
                        <Select
                          value={x.quantity}
                          onChange={e => dispatch(updateProductInCart(x._id, e.target.value))}
                          placeholder="Select"
                        >
                          {[...Array(10).keys()].map(c => (
                            <option key={c + 1}>{c + 1}</option>
                          ))}
                        </Select>
                      </Td>
                      <Td>
                        <Button
                          marginTop="3"
                          w="100%"
                          colorScheme="red"
                          onClick={e => dispatch(removeProductFromCart(x._id))
                          }
                        >
                          <DeleteIcon />
                        </Button>
                      </Td>
                    </Tr>
                  ))
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Text fontSize='4xl'>Cart is empty...</Text>
        )}
      </GridItem>
      <GridItem colSpan={2} rowSpan={50}>
        <Flex bg="#E42529" color="white" p="6" h="80vh" direction="column">
          <Text fontSize="2rem">Subtotal ({carts.length}) Items</Text>

          <Text fontSize="2rem">Total: ₹ {total}</Text>
          <Spacer />
          <Button
            color="black"
            w="100%"
            
            marginTop="5"
            fontSize='xl'
            onClick={() =>
              
                navigate("/Otp")
              
            }
          >
            Proceed to Checkout
          </Button>
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
}

export default Cart