import { Box, HStack, Image, Stack, Tag, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';

function Tablet() {

    const [tablet,setTablet]=useState([])

  async function getTablet(){
    let res=await fetch(`https://masaidigital.onrender.com/product?category=tablet`)
    let data=await res.json()
    setTablet(data)
   }

   useEffect(()=>{
    getTablet()
   },[])
   console.log(tablet);
 
    return (
        <VStack h="500px" mb='8' display="flex" justifyContent="start" paddingLeft="30px"  >

            <Box h="60px" width="100%" paddingLeft="20px" padding="12px" >
                <Text fontSize="22px" fontWeight="semibold"> TABLETS | <span className="viewover" style={{ fontSize: "14px" }}>VIEW ALL</span></Text>
            </Box>
            <HStack height="100%" width="100%" paddingLeft="30px" >

                <Box padding="20px">
                    <Image width="380px" src="https://www.reliancedigital.in/medias/Tablets.jpg?context=bWFzdGVyfGltYWdlc3w1NDUyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGRiLzk4NjIyMDgwOTQyMzguanBnfDJkYTA3NzA1YWUxZmNiMGY0N2EzZjBjOTlkMTNiYzlkNjM5NjAxN2YzMWRjNjA3MjljNDExYzg3OGU1OTJhM2Y" />
                </Box>

                <HStack
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    h="100%" width="67%" display="flex" justifyContent="space-around" gap="30px" padding="20px" >
                    {
                        tablet.map((items) => (
                            <div style={{ width: "30%", boxSizing: "border-box" }} key={items._id}>
                                   <Link to={`product/${items._id}`} >
                                <img style={{ height: "200px" }} width="200px" src={items.images[0]} alt={items.id} />
                                <div className="title_lapi">
                                    <h3  > {items.title}</h3>
                                </div>

                                <div className="price">
                                    <h5 ><span className="offer">M.R.P : ₹{" "} <span className="off">{items.mrp}</span> </span> </h5>
                                    <h4><span className="offer"> Offer Price:</span> ₹ {items.price}</h4>


                                </div>

                                <Tag size="md" mt="5px" borderRadius="30px" variant='solid' colorScheme='teal'>
                                    Offer Available
                                </Tag>
                                </Link>
                            </div>
                        ))
                    }

                </HStack>




            </HStack>

        </VStack>
    )
}
export default Tablet