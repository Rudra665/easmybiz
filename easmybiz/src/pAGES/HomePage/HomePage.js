import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import Card from '../../Components/card/Card';
import { useRef, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Carousal from '../../Components/carousalSlider/Carousal';
import { Container } from '@mui/system';
 const Homepage=()=> {
    const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    
  
    
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  const elementRef = useRef(null);
    return (
    <>
        <Box width="100%" >
        <Carousal/>
        </Box>
        <Box width="100%" my="3vh" sx={{display:"grid", justifyContent:"center"}}>
            <Typography align="center" variant="h4" sx={{color:"#028d63", fontWeight:"700"}}>Destination</Typography>
           <Container maxWidth="md">
           <Box display="flex" alignItems="center">
           <Box>
           <IconButton
           sx={{backgroundColor:"#313131"}}
           align="center"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 210, -15);
          }}
        >
          <ArrowBackIosIcon sx={{'& :hover':{color:"red"}}}/>
        </IconButton></Box>
           <Box className='Container' ref={elementRef} sx={{display:"flex",width:"100%",overflow:"scroll", transition:"all ease-in-out .3s" }}>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           </Box>
           <Box>
           <IconButton
           backgroundColor="black"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 210, 15);
          }}
        >
          <ArrowForwardIosIcon sx={{'& :hover':{color:"red"}}}/>
        </IconButton>
        </Box>
        </Box>
           </Container>
        </Box>
        
        <Box sx={{backgroundColor:"black", height:"60vh"}}>



        </Box>
</>
    );
}
export default Homepage;