import { Box, HStack, Stack, Tag, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import pdata from "./database_devices"

function Devices(){
  
    const [appliances,setAppliances]=useState([])

    async function getAppliances(){
      let res=await fetch(`https://masaidigital.onrender.com/product?category=appliances&limit=5`)
      let data=await res.json()
      setAppliances(data)
     }
  
     useEffect(()=>{
        getAppliances()
     },[])
   


    return (
       <VStack  h="auto">

        <Box h="60px" width="100%" paddingLeft="20px" padding="12px" >
            <Text fontSize="22px" fontWeight="semibold">LOWEST PRICES ON SMALL APPLIANCES | <span className="viewover" style={{fontSize:"14px"}}>VIEW ALL</span></Text>
        </Box>
        <HStack 
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        h="auto" width="100%" display="grid"  gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(5,1fr)",
          }} gap="30px" padding="20px" >
            {
                appliances.map((items)=>(
                    <Box  key={items._id} display={"flex"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(5,1fr)"}}>
                    <Link to={`product/${items._id}`} >
                   <Box>
                   <img style={{height:"200px"}} width="200px"  src={items.images[0]} alt={items.id} />
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

                   </Box>
                   </Link>
                    </Box>
                ))
            }

        </HStack>

       </VStack>
    )
}
export default Devices