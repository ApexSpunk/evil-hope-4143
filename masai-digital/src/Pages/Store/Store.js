import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Storeproducts from "../../Components/Storeproducts";

function Store() {
  const [products, setProducts] = useState([]);

  return (
    <Box>
      <Grid templateColumns="repeat(11, 1fr)" m="auto" mx="4" mt="8">
        <GridItem
          display={{ base: "none", lg: "block" }}
          colSpan={2}
          border="1px solid"
          borderColor="gray.100"
          p="4"
        ></GridItem>
        <GridItem
          colSpan={{ base: 11, lg: 9 }}
          border="1px solid"
          borderColor="gray.100"
          px={{ base: 1, sm: 8 }}
          py="7"
        >
          <Storeproducts />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Store;
