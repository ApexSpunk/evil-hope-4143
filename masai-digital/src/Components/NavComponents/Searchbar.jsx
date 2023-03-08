import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'



const SearchBar = ( OpenSearch , SetOpenSearch ) => {

    const [data,setData]=useState([]);

   async function getData(){
        let res=await fetch(`https://masaidigital.onrender.com/product/search`)
        let sdata=await res.json()
        setData(sdata)
    }

    useEffect(()=>{
     getData()
    },[])
  
  for(let i of data){
    i.name = i["title"]
  }

  const arr=[];
  const obj={};
  for(let i=0; i<data.length; i++){
    if(obj[data[i].title] === undefined){
      obj[data[i].title]=1
      arr.push(data[i]);
    }
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

  }


  return (
    


    <Stack ml={"100px"}  w={{ base: '180px', md: '450px', lg: '600px' }}  pb={{lg: '25px' }} zIndex={201} >
    <ReactSearchAutocomplete
      items={arr}
      onSearch={handleOnSearch}
      onSelect={handleOnSelect}
      autoFocus
      formatResult={formatResult}
      fuseOptions={{ keys: ["title", "price"] }}
      placeholder="Find your favorite Products"
    />

  </Stack>
 
  )
}

export default SearchBar