import { Box, Heading, HStack, Img } from "@chakra-ui/react"

function Washing(){
    return (
        <div>
            
            <Heading marginLeft="30px" fontSize="22px" fontWeight="350" >TOP BRANDS - WASHING MACHINE</Heading>

            <HStack display="grid"  gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }} height="300px" width="100%" mt={{ base: '40px', md: '50px', lg: '20px' }} mb={{ base: '500px', md: '250px', lg: '20px' }}>
                <Box>
                <Img src="https://www.reliancedigital.in/medias/Samsung-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMzc1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDc1Lzk4NjE5ODU4NjE2NjIuanBnfDVhZWRlNjAzYmE2MWUxNGNiMTgyMTIwODM0ZTBhYTg5ZmJkZDEyZTA5YmFkYmYwMTNiZWE5YTBmMGQyMzcyMzE" />
                </Box>
                <Box>
                    <Img
                     src="https://www.reliancedigital.in/medias/Sansui-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNjM0NHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDA4Lzk4NjE5ODU3OTYxMjYuanBnfDdjMmNkOWMyNTFlNTAyYTBkNjg3ZWMxYjBmMGNlYzQwMzkzZjc2Y2QyOGM4MzRiNDYxYmQ5ZjU3MmZhNjE4NjI" />
                </Box>

                <Box>
                    <Img src="https://www.reliancedigital.in/medias/LG-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNzk1MXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaGY4Lzk4NjE5ODU5OTI3MzQuanBnfGY3NzdiYzA0MDFkZjhmNTRlYTI5ODgyYWM5MTdjNjI0ZjZjNjlhY2E3YTIwNTI2MzllYTI5MGQxY2Q0Mjg4Yjk"/>
                </Box>
                <Box>
                    <Img src="https://www.reliancedigital.in/medias/Candy-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMjEyNXxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDAwLzk4NjE5ODYxMjM4MDYuanBnfDU5MzBjMmRjZThmNTYyZWY1ZmIyYTNlMDdlYzg1YWFkYzlhZWVmNTE3MjM0ZTM3MGNmOTBlMDZiNDIwM2Y4YmQ" />
                </Box>
            </HStack>
        </div>
    )
}
export default Washing