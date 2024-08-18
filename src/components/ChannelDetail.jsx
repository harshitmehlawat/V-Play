import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/api'

const ChannelDetail = () => {
  const {id}= useParams();
  const [channelDetail,setChannelDetail]=useState(null);
  const [videos,setVideos]=useState([]);

  console.log(channelDetail,videos);
  useEffect(()=>{
     fetchFromAPI(`channels?part=snippet&id=${id}`)
     .then((data)=>{setChannelDetail(data?.items[0])})

     fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
     .then((data)=>{setVideos(data?.items)})
  },[id])

  return (
    <Box minHeight='95vh'>
        <Box>
          <div style={{zIndex:10,height:'300px',background:'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'}} />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        </Box>
        <Box display='flex' p='99'>
           <Box sx={{mr:{xs:'15px',sm:'100px'}}}/>
           <Videos videos={[videos]}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail