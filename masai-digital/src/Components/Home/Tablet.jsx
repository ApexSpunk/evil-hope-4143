import { Box, HStack, Image, Stack, Tag, Text, VStack } from "@chakra-ui/react"
import tabletdata from "./database_tablet"

function Tablet(){
    console.log(tabletdata)
    return (
       <VStack  h="auto" display="flex" justifyContent="start" paddingLeft="30px"  >

        <Box h="auto" width="100%" paddingLeft="20px" padding="12px" >
            <Text fontSize="22px" fontWeight="semibold"> TABLETS | <span className="viewover" style={{fontSize:"14px"}}>VIEW ALL</span></Text>
        </Box>
        <HStack height="100%" width="100%" paddingLeft="30px"paddingBottom="20px" >

        <Box padding="20px">
            <Image width="380px" src="https://www.reliancedigital.in/medias/Tablets.jpg?context=bWFzdGVyfGltYWdlc3w1NDUyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGRiLzk4NjIyMDgwOTQyMzguanBnfDJkYTA3NzA1YWUxZmNiMGY0N2EzZjBjOTlkMTNiYzlkNjM5NjAxN2YzMWRjNjA3MjljNDExYzg3OGU1OTJhM2Y" />
        </Box>

        <HStack 
             boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
             h="100%" width="100%" display="grid"  gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              }} gap="30px" padding="20px" m="auto" >
            {
                tabletdata.map((items)=>(
                    <div key={items.id}>
                    {/* <h4>{products.id}</h4> */}
                    <img src={items.image} alt={items.id} />
                    <div  className="title_lapi">
                    <h3  > {items.title}</h3>
                    </div>

                    <div className="price">
                        <h4><span className="offer"> Offer Price:</span> ₹ {items.offer}</h4>
                        <h5 ><span className="offer">M.R.P : ₹{" "} <span className="off">{items.save}</span> </span> </h5>
                    
                        
                    </div>

                    <Tag size="md" mt="5px" borderRadius="30px"  variant='solid' colorScheme='teal'>
                                  Offer Available
                    </Tag>

                    </div>
                ))
            }

        </HStack>

       


        </HStack>

       </VStack>
    )
}
export default Tablet