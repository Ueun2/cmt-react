import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading () {
  return (
    <Box sx={{color:'#d2d2d2',textAlign:'center',py:10}}>
      <CircularProgress color="inherit"/>
    </Box>
  )
}

export default Loading