// import { Button, Icon, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
// import { Search2Icon } from "@chakra-ui/icons"
// import "./header.css"

// export default function SearchBar(){
//     return (
    
//         <div>
//             <InputGroup>
//             <Input
//                     isInvalid
//                     errorBorderColor='red.300'
//                     placeholder='Find your favourite products'
//                     borderRadius="30px"
//                     bgColor="white"
//                     width="600px"
                   
//                 />
//             <InputRightElement  paddingRight="40px">
//             <Button bg="none" height="35px"><Icon  as={Search2Icon}/></Button>
//             </InputRightElement>
//             </InputGroup>
//         </div>
   
//     )
// }









import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'



const SearchBar = ( OpenSearch , SetOpenSearch ) => {

    const [data,setData]=useState([]);

   async function getData(){
        // let res=await fetch(`https://masaidigital.onrender.com/product/search`)
        let res=await fetch(`http://localhost:8080/product/search`)
        let sdata=await res.json()
        setData(sdata)
    }

    useEffect(()=>{
     getData()
    },[])
  
  for(let i of data){
    i.name = i["title"]
  }



    const navigate = useNavigate()

    const formatResult = (item) => {
        return (
          <HStack 
            onClick={()=>SetOpenSearch( OpenSearch=="none" ? "block" : "none" )} >
            <Image boxSize={50} src={item.images[0]} />
            <Text>{item.title.slice(0,50)}...</Text>
          </HStack>
        )
      }


      
  const handleOnSearch = (string, results) => {
    // results.map
    console.log(string, results)
  }

  const handleOnSelect = (item) => {
    navigate(`/product/${item._id}`)
    // console.log(item)
  }


  return (
    


    <Stack position="fixed"  style={{ width: "40%", left:340, top:30 ,height:60 }} zIndex={1} >

    <ReactSearchAutocomplete
      items={data}
      onSearch={handleOnSearch}
      onSelect={handleOnSelect}
      autoFocus
      formatResult={formatResult}
      fuseOptions={{ keys: ["title", "price"] }}
    />

  </Stack>
 
  )
}

export default SearchBar