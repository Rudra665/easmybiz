import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo2 from "../../Assets/images/logo2.png"
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#1a252b", paddingBlock: 8, marginTop: 3 }}>
            <Container>
                <Box display="flex">
                    <Grid container spacing={2}>
                        <Grid item lg="3" md="3" xs="12">
                            <Box>
                                <Box marginBottom="3vh">
                                    <Link to="/"><img width="130vh" src={logo2}></img>
                                    </Link>
                                </Box>
                                <Typography color="grey" marginY="1vh">© copyright</Typography>
                                <Typography color="grey">Company LLC.</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg="3" md="3" xs="12" >
                            <Typography color="white" marginBottom="2vh">Services</Typography>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Cold calling</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Social media management</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Administration assistance</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Customer support assistant</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Business assistance</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Architecture assistance </Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Web development</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Book keeping</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>It staffing</Typography></Link>
                        </Grid>
                        <Grid item lg="3" md="3" xs="12">
                            <Typography color="white" marginBottom="2vh">Important Pages</Typography>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>About Us</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Refund Policy</Typography></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><Typography sx={{ fontSize: "15px", marginBottom: "1vh" }}>Clients</Typography></Link>
                        </Grid>
                        <Grid item lg="3" md="3" xs="12" >
                            <Typography color="white" marginBottom="2vh">Get In Touch</Typography>
                            <Link sx={{ textDecoration: "none", color: "grey", marginRight: 1, cursor: "pointer", '& :hover': { color: "#90c404" } }}><FacebookIcon fontSize='large' /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", marginRight: 1, cursor: "pointer", '& :hover': { color: "#90c404" } }}><InstagramIcon fontSize='large' /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", marginRight: 1, cursor: "pointer", '& :hover': { color: "#90c404" } }}><LinkedInIcon fontSize='large' /></Link>
                        </Grid>
                        {/* <Grid item lg="3" md="3" xs="12">
                            <Typography color="white" marginBottom="2vh">Get In Touch</Typography>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><FacebookOutlinedIcon /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><InstagramIcon /></Link>
                            <Link sx={{ textDecoration: "none", color: "grey", cursor: "pointer", '& :hover': { color: "#90c404" } }}><LinkedInIcon /></Link>
                        </Grid> */}

                    </Grid>
                </Box>
            </Container >
        </Box >
    )
}

export default Footer
