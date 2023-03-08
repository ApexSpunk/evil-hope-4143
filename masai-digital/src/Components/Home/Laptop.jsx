import { Box, HStack, Stack, Tag, Text, VStack } from "@chakra-ui/react"
import data from "./database_laptop"
import axios from "axios"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"

function Laptop(){
const [laptop,setLaptop]=useState([])

  async function getLaptop(){
    let res=await fetch(`https://masaidigital.onrender.com/product?category=laptop&limit=5`)
    let data=await res.json()
    setLaptop(data)
   }

   useEffect(()=>{
    getLaptop()
   },[])
 

    return (
       <VStack width={"100%"}  h="auto">
        <Box h="60px" width="100%" paddingLeft="20px" padding="12px" >
            <Text fontSize="22px" fontWeight="semibold">BEST DEALS ON LATEST LAPTOPS | <span className="viewover" style={{fontSize:"14px"}}>VIEW ALL</span></Text>
        </Box>
        <Box 
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        h="auto"  display="grid"  gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(5,1fr)",
          }} gap="30px" padding="20px" width="100%">
            {
                laptop.map((items)=>(
                    <Box key={items._id}>
                       <Link to={`product/${items._id}`} >
                    <img style={{height:"200px"}} width="200px"  src={items.images[0]} alt={items.id} />
                    <div  className="title_lapi">
                    <h3  > {items.title.slice(0,50)}....</h3>
                    </div>

                    <div className="price">
                        <h5 ><span className="offer">M.R.P : ₹{" "} <span className="off">{items.mrp}</span> </span> </h5>
                        <h4><span className="offer"> Offer Price:</span> ₹ {items.price}</h4>    
                    </div>

                    <Box justifyContent={"center"} alignItems={"center"}>
                        <Tag  size="md" mt="5px" borderRadius="30px"  variant='solid' colorScheme='teal'>
                                    Offer Available
                        </Tag>
                    </Box>
                    </Link>   
                    </Box>
                ))
            }

        </Box>

       </VStack>
    )
}
export default Laptop