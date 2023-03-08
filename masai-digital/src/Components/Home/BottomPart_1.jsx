import { Box, HStack, Image, Stack, Tag, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

function BottomPart_1(){
    const [soundbar,setSoundBar]=useState([])

    async function getSoundbar(){
      let res=await fetch(`https://masaidigital.onrender.com/product?category=soundbar&limit=5`)
      let data=await res.json()
      setSoundBar(data)
     }
  
     useEffect(()=>{
        getSoundbar()
     },[])
   

    return (
       <VStack  h="100%" width={"100%"} display="flex" justifyContent="start" paddingLeft="30px"  >

        <Box h="100%" width="100%" paddingLeft="20px" padding="12px" >
            <Text fontSize="22px" fontWeight="semibold">BEST SELLING SOUNDBARS | <span className="viewover" style={{fontSize:"14px"}}>VIEW ALL</span></Text>
        </Box>
        <HStack height="100%" width="100%" paddingLeft="30px" >
        <HStack 
             boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
             h="100%" display="grid"  gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(5,1fr)",
              }} gap="30px" padding="20px" w={"100%"} m="auto" >
            {
                soundbar.map((items)=>(
                    <div key={items._id}>
                         <Link to={`product/${items._id}`} >
                    <img  src={items.images[0]} alt={items.id} />
                    <div  className="title_lapi">
                    <h3  > {items.title.slice(0,50)}....</h3>
                    </div>

                    <div className="price">
                        <h5 ><span className="offer">M.R.P : ₹{" "} <span className="off">{items.mrp}</span> </span> </h5>
                        <h4><span className="offer"> Offer Price:</span> ₹ {items.price}</h4>
                    </div>

                    <Tag size="md" mt="5px" borderRadius="30px"  variant='solid' colorScheme='teal'>
                                  Offer Available
                    </Tag>
                    </Link>
                    </div>
                ))
            }

        </HStack>

        <Box padding="20px">
            <Image width="360px" src="https://www.reliancedigital.in/medias/Best-Selling-Soundbars-Products-Carousel-Banner-30-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w1MDA1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDBkLzk4NTc5NzI4OTU3NzQuanBnfGZmYTM1ZDMzNGU5YTY3NzA1NWJiNWE1OTA4MTU5MjIyMTRjNWY1MTA4ZmQxNGM5NGNhMzU2YjUyMzE4Y2QzNWI" />
        </Box> 


        </HStack>

       </VStack>
    )
}
export default BottomPart_1