import React from 'react'
import card1 from '../../Assets/images/card1.jpeg'
import { Paper } from '@mui/material'
import { Box } from '@mui/system'
function Card() {
    return (
        <>
      
       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height:270,
          overflow:"hidden",
          borderRadius:"20px",
        },
      }}
    >
      <Paper elevation={3}>
        <img width="100%" src={card1}/>
      </Paper>
    </Box>
        
        </>
    )
}

export default Card
