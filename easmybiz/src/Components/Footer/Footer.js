import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo2 from "../../Assets/images/Logo2.png"
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "black", paddingBlock: 3, marginTop: 3, bottom:0, width:"100%" }}>
            <Container>
                <Box justifyContent="space-between" width="100%" sx={{display:{xl:"flex", lg:"flex",md:"flex", sm:"flex", xs:"inline-block"},}} >   
                            <Box display="flow-root" justifyContent="center" width="100%" my="5vh">
                                <Box marginBottom="3vh" >
                                    <Link to="/"><img src={logo2}></img>
                                    </Link>
                                </Box>
                                <Typography color="grey" marginY="1vh">© copyright</Typography>
                                <Typography color="grey">Company LLC.</Typography>
                            </Box>
                     <Box display="flow-root" justifyContent="center" width="100%" my="5vh">
                            <Typography align="center" color="white" marginBottom="2vh">Get In Touch</Typography>
                            <Box display="flex" justifyContent="center">
                            <Link sx={{ textDecoration: "none", color: "grey", marginRight: 1, cursor: "pointer", '& :hover': { color: "red" } }}><FacebookIcon fontSize='large' /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", marginRight: 1, cursor: "pointer", '& :hover': { color: "red" } }}><InstagramIcon fontSize='large' /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", marginRight: 1, cursor: "pointer", '& :hover': { color: "red" } }}><LinkedInIcon fontSize='large' /></Link>
                            </Box>
                            </Box>
                        <Box display="flow-root" align="center" justifyContent="center" width="100%" my="5vh">
                            <Typography color="white" marginBottom="2vh">Services</Typography>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Cold calling</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Social media management</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Administration assistance</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Customer support assistant</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Business assistance</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Architecture assistance </Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Web development</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Book keeping</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>It staffing</Typography></Link>
                            </Box>
                        <Box display="flow-root" align="center" justifyContent="center" width="100%" my="5vh">
                            <Typography color="white" marginBottom="2vh">Important Pages</Typography>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>About Us</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Refund Policy</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "red" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Clients</Typography></Link>
                            </Box>
                        
                        {/* <Grid item lg="3" md="3" xs="12">
                            <Typography color="white" marginBottom="2vh">Get In Touch</Typography>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><FacebookOutlinedIcon /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><InstagramIcon /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><LinkedInIcon /></Link>
                        </Grid> */}

                 
                </Box>
            </Container >
        </Box >
    )
}

export default Footer
