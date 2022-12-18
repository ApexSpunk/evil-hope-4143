import { Box, Button, Checkbox, Flex, Grid, GridItem, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsPrinter, BsShare } from 'react-icons/bs'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../Redux/products/actions'

function Product() {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()
    const [similarProducts, setSimilarProducts] = useState([])

    const dispatch = useDispatch()
    const { singleProduct, getProduct: { loading, error } } = useSelector(state => state.product)
    const toast = useToast()
    console.log(singleProduct)
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [id])

    return (
        <Box ml='8' mt='4'>
            {
                loading ? <Text>Loading...</Text> : error ? <Text>{error}</Text> : <Grid templateColumns='repeat(3, 1fr)' gap={6} templateRows='90vh' alignItems='center'>
                    <GridItem colSpan={1}>
                        <Image src={singleProduct.images[0]} />
                        <Flex mt='8' justifyContent='space-between'>
                            {
                                singleProduct.images?.slice(1, 4).map((image, index) => <Image key={index} src={image} />)
                            }
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} >
                        <Grid templateColumns='repeat(2, 1fr)'>
                            <GridItem colSpan={2} mb='-4' boxSizing='border-box' rounded='none' border='1px solid #e2e8f0' p='4'>
                                <Text fontSize='sm'>Article ID: {singleProduct._id.slice(4, 14)}</Text>
                                <Text fontSize='22px' mt='4' fontWeight='bold'>{singleProduct.title}B</Text>
                                <Flex mt='4' align='center' gap='4'>
                                    <Checkbox colorScheme='green'>Add to Compare |</Checkbox>
                                    <BsShare size='20px' />
                                    <BsPrinter size='20px' /> Print
                                </Flex>
                            </GridItem>
                            <GridItem colSpan={1} boxSizing='border-box' mt='4' border='1px solid #e2e8f0' p='4'>
                                <Text fontSize='lg' fontWeight='bold'>Save more with EMI/Cashback (1) Read T&C</Text>
                                <Box ml='8' mt='4'>
                                    <ul>
                                        <li>EMIs (Credit Cards) from ₹575.67/month | View all Standard Credit Cards EMI options</li>
                                    </ul>
                                </Box>
                                <Text fontSize='lg' mt='6' fontWeight='bold'>Warranty</Text>
                                <Box ml='8' mt='4'>
                                    <ul>
                                        <li>Warranty: 1 Year manufacturer warranty</li>
                                    </ul>
                                </Box>
                                <Text fontSize='lg' mt='6' fontWeight='bold'>Key Features</Text>
                                <Box ml='8' mt='4'>
                                    <ul>
                                        <li>{singleProduct.brand} Has Blockbuster Games, HD Movies And Controller-Free Fun For Everyone</li>
                                        <li>Built-In Wi-Fi For Easy Connection To Xbox LIVE</li>
                                        <li>Super Quiet With Sleek New Design Plus Matching Controller</li>
                                        <li>Ready For The Controller-Free Fun Of Kinect</li>
                                    </ul>
                                </Box>
                                <Text fontSize='lg' mt='6' fontWeight='bold'>Return Policy</Text>
                                <Box ml='8' mt='4'>
                                    <ul>
                                        <li>Items are eligible for return within 7 Days of Delivery. Read T&C</li>
                                        <li>All accessories, product & packaging need to be returned in original condition.</li>
                                    </ul>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} mt='4' boxSizing='border-box' rounded='none' border='1px solid #e2e8f0' p='4'>
                                <Text fontSize='2xl' color='blue.700' fontWeight='bold'>
                                    ₹{singleProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </Text>
                                <Text fontSize='md' mt='4'>MRP: <b>₹{singleProduct.mrp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> (Inclusive of all taxes)</Text>
                                <Text fontSize='lg' color='green.600' mt='2' fontWeight='bold'>You Save: {
                                    Math.round((singleProduct.mrp - singleProduct.price) / singleProduct.mrp * 100)
                                }%(₹{singleProduct.saveprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</Text>
                                <Text fontSize='sm' mt='2' fontWeight='semibold'>EMIs (Credit Cards) from ₹575.67/month | <Text as='span' color='blue.500'>View Plans</Text></Text>
                                <Text fontSize='lg' mt='2' fontWeight='semibold'>FREE Shipping!</Text>
                                <Input name='pincode' width='60%' mt='4' placeholder='Enter Pincode' />
                                <Flex>
                                    <Button mt='4' colorScheme='red' w='full' variant='solid'>
                                        Add To Cart
                                    </Button>
                                    <Button mt='4' ml='2' colorScheme='orange' w='full' variant='solid'>
                                        Buy Now
                                    </Button>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            }
        </Box>
    )
}

export default Product