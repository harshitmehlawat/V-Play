import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import {Sidebar,Videos} from './'
import { fetchFromAPI } from '../utils/api'

const Feed = () => {
  
  const [selectedCategory,setselectedCategory]=useState('New');
  const[videos,setvideos]= useState([])

  useEffect(()=>{
     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
     .then((data)=>setvideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>

       <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
          copyright 2023 vedant
        </Typography>
       </Box>

       <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' mb={2} fontWeight="bold" sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#2192FF'}}>videos</span>
        </Typography>
        
        <Videos videos={[videos]}/>
       </Box>

    </Stack>
  )
}

export default Feed