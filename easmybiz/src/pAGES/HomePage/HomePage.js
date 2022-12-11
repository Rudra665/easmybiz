import { Box, Typography } from '@mui/material';
import React from 'react'
import Card from '../../Components/card/Card';

import Carousel from 'react-bootstrap/Carousel';
import Carousal from '../../Components/carousalSlider/Carousal';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import { Container, width } from '@mui/system';
 const Homepage=()=> {
    return (
    <>
        <Box width="100%" >
        <Carousal/>
        </Box>
        <Box width="100%" my="3vh" sx={{display:"grid", justifyContent:"center"}}>
            <Typography align="center" variant="h4" sx={{color:"#028d63", fontWeight:"700"}}>Destination</Typography>
           <Container maxWidth="md">
           <Box sx={{display:"flex",width:"100%"}}>
            
            
<Card/>
<Card/>
<Card/>
<Card/>




</Box>
           </Container>
        </Box>
        
</>
    );
}
export default Homepage;