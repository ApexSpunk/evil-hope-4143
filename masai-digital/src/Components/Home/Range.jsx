import { Box, Button, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";

function Range() {
  return (
    <Box textAlign={"center"} className="rang">
      <Heading mt="10px" marginBottom="10px" fontSize="22px" textAlign="center">
        EXPLORE OUR RANGE OF PRODUCTS
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(5,1fr)",
        }}
        height="auto"
        width="100%"
        textAlign={"center"}
        margin="auto"
      >
        <Box textAlign={"center"}>
          <Image 
          width={"100%"}
            src="https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng"
            alt=""

            />
          <Text
            _hover={{ color: "red", cursor: "pointer" }}
            fontSize="20px"
          >
            Televisions
          </Text>
        </Box>
        <Box>
          <Image
          width={"100%"}
            src="https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2"
            alt=""
          />
          <Text
            _hover={{ color: "red", cursor: "pointer" }}
            fontSize="20px"
          >
            Smart Wearableas
          </Text>
        </Box>
        <Box>
          <Image
          width={"100%"}
            src="https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA"
            alt=""
          />
          <Text
            _hover={{ color: "red", cursor: "pointer" }}
            fontSize="20px"
          >
            Washing Machine
          </Text>
        </Box>
        <Box>
          <Image
          width={"100%"}
            src="https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA"
            alt=""
          />
          <Text
            _hover={{ color: "red", cursor: "pointer" }}
            fontSize="20px"

          >
            Speakers & Headphones
          </Text>
        </Box>
        <Box>
          <Image
          width={"100%"}
            src="https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA"
            alt=""
          />
          <Text
            _hover={{ color: "red", cursor: "pointer" }}
            fontSize="20px"
        
          >
            Cameras
          </Text>
        </Box>
      </Box>

      <HStack>
        <Spacer />
        <Box>
          <Button
            _hover={{ bgColor: "#fff", color: "blue" }}
            color="white"
            bg="#003380"
            margin="auto"
            mt="20px"
          >
            View All
          </Button>
        </Box>
        <Spacer />
      </HStack>
    </Box>
  );
}
export default Range;
