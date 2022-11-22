import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import logo2 from "../../Assets/images/logo.png"
import MockData from "./MockData.json"
const ServicesMap = () => {

    return (
        <> <Grid container>
            {MockData.map((data) => (
                <Grid item lg="4" md="6" xs="12">
                    <Box className="border-bottom" marginY="60px" marginX="15px">
                        <Container>
                            <Box >
                                <img width="70%" src={data.image} alt="img"></img>
                            </Box>
                            <Box paddingY="1vh">
                                <Typography variant='h5'>{data.heading}</Typography>
                                <Typography fontSize="16px" color="gray" >
                                    {data.paragraph}
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                </Grid>
            ))}
        </Grid >
        </>

    )
}

export default ServicesMap
