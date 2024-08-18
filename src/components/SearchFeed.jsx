import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Typography } from '@mui/material'
import {Videos} from './'
import { fetchFromAPI } from '../utils/api'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const[videos,setvideos]= useState([])
  const {searchTerm}=useParams();

  useEffect(()=>{
     fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
     .then((data)=>setvideos(data.items))
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' mb={2} fontWeight="bold" sx={{color:'white'}}>
          Search Results for: <span style={{color:'#2192FF'}}>{searchTerm}</span> videos
        </Typography>
        
        <Videos videos={[videos]}/>
    </Box>
  )
}

export default SearchFeed