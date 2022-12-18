import { Box, Grid, Text, Image, Flex, Button, useToast, SlideFade, Alert, AlertIcon, AlertTitle, AlertDescription, GridItem, ScaleFade } from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/products/actions';

function StoreProducts() {

    const dispatch = useDispatch();
    const { products, getProducts: { loading, error } } = useSelector(state => state.product);
    const toast = useToast();
    const [searchParams, setSearchParams] = useSearchParams();
    

    useEffect(() => {
        dispatch(getProducts({category: searchParams.get('category')}));
    }, [searchParams]);

 



    if (!products.length && !loading) {
        return <Alert
            status='warning'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            w='600px'
            m='10% auto'

        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                No Products Found
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                No Products Found Related to your search
            </AlertDescription>
        </Alert>
    }

    return (
        <Box>
            <Box>
                <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap='6' m='auto'>
                    {
                        loading ? <h4>Loading...</h4> : products.map((product) => (
                            <GridItem colSpan='1' key={product.id} _hover={{ boxShadow: 'lg', cursor: 'pointer' }} borderRadius='3px' bg='white' >
                            <Link to={`/product/${product._id}`}>
                                <Box>
                                    {
                                        <Box>
                                            <Image src={product.images[0]} />
                                            <Box>
                                            </Box>
                                            <Box p={3}>
                                                <Text fontWeight='extrabold' fontSize='15px'>{product?.name}</Text>
                                                <Text fontWeight='thin' fontSize='12px' color='gray' mt='0'>{product?.tagline?.substring(0, 22)}...</Text>
                                                <Flex gap={1} alignItems='center'>
                                                    <Text fontWeight='bold' fontSize='15px' mt='1'>Rs. {product?.price}</Text>
                                                    <Text fontWeight='thin' as={'s'} fontSize='12px' color='gray' mt='6px'>Rs. {product?.mrp}</Text>
                                                    <Text fontWeight='thin' fontSize='12px' color='orange.400' mt='6px'>({((product?.price * 100) / product?.mrp).toFixed(0)}% OFF)</Text>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    }
                                </Box>
                            </Link>

                            </GridItem>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default StoreProducts