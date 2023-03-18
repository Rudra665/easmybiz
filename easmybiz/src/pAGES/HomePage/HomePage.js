import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import Card from '../../Components/card/Card';
import { useRef, useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Carousal from '../../Components/carousalSlider/Carousal';
import { Container } from '@mui/system';
import DatePicker from "../../Components/DatePicker/DatePicker"
import LocationPicker from '../../Components/LocationPicker/LocationPicker';
 const Homepage=()=> {
    const [arrowDisable, setArrowDisable] = useState(true);
    const [isTrips, setIsTrips]=useState(false)
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
        <Box width="100%" sx={{position:"relative"}}>
        <Carousal/>
        <Box sx={{position:"absolute", left:0,bottom:65, height:"8vh", zIndex:"100",alignItems:"end", display:"flex", borderRadius:"30px 30px 0px 0px", width:"35%", justifyContent:"center"}}>
          <Button onClick={()=>setIsTrips(false)} variant="contained" sx={{width:"50%", height:"6vh",borderRadius:"30px 0px 0px 0px"}} color="error">
            Booking
          </Button>
          <Button onClick={()=>setIsTrips(true)} variant="contained" sx={{width:"50%", height:"6vh",borderRadius:"0px 30px 0px 0px"}} color="error">
            Trips
          </Button>
        </Box>
        {!isTrips &&
        <Box sx={{position:"absolute", left:0,bottom:0,height:"10vh",backgroundColor:"white",zIndex:"100",alignItems:"end", display:"flex", borderRadius:"0px 30px 0px 0px", width:"55%", justifyContent:"center"}}>
          <LocationPicker/>
          <DatePicker label={"Check In"}/>
          <DatePicker label={"Check Out"}/>
        </Box>
 }
        {isTrips &&
         <Box  sx={{position:"absolute", left:0,bottom:0,height:"10vh",backgroundColor:"white",zIndex:"100",alignItems:"end", display:"flex", borderRadius:"0px 30px 0px 0px", width:"45%", justifyContent:"center"}}>
          <LocationPicker/>
        </Box> 
      }
        </Box>
        <Box sx={{backgroundColor:"black", height:"60vh", display:"flex", alignItems:"center", padding:"3vh"}}>
        <Box width="100%" my="3vh" sx={{display:"grid", justifyContent:"center"}}>
            <Typography align="center" variant="h4" sx={{color:"red", fontWeight:"700", margin:"5vh"}}>Destination</Typography>
           <Container maxWidth="md">
           <Box display="flex" alignItems="center">
           <Box>
           <IconButton
           
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 210, -15);
          }}
        >
          <ArrowCircleLeftIcon fontSize="large" sx={{color:"red", '& :hover':{color:"white"}}}/>
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
           
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 210, 15);
          }}
        >
          <ArrowCircleRightIcon fontSize="large" sx={{color:"red", '& :hover':{color:"white"}}}/>
        </IconButton>
        </Box>
        </Box>
           </Container>
        </Box>
        </Box>
         
        <Box width="100%" my="5vh" sx={{display:"grid", justifyContent:"center"}}>
            <Typography align="center" variant="h4" sx={{color:"#028d63", fontWeight:"700", margin:"3vh"}}>Destination</Typography>
           <Container maxWidth="md">
           <Box display="flex" alignItems="center">
           <Box>
           <IconButton
           
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 210, -15);
          }}
        >
          <ArrowCircleLeftIcon fontSize="large" sx={{color:"black", '& :hover':{color:"red"}}}/>
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
           
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 15, 210, 15);
          }}
        >
          <ArrowCircleRightIcon fontSize="large" sx={{color:"Black", '& :hover':{color:"red"}}}/>
        </IconButton>
        </Box>
        </Box>
           </Container>
        </Box>
        
</>
    );
}
export default Homepage;