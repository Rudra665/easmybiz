import { Button, Container, Divider, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Slider1 from '../../Assets/images/slider-1.jpg'
import Slider2 from '../../Assets/images/slider-2.jpg'
import Bullet from '../../Assets/images/Bullet-red.png'
import ServicesMap from '../../Components/ServicesMap/ServicesMap'
import Brightness1Icon from '@mui/icons-material/Brightness1';
function HomePage() {
  return (
    <>

      <Box sx={{ marginTop: "100px", width: "100%", right: "0", minHeight: "70vh", backgroundImage: `url(${Slider1})`, display: "flex", alignItems: "center", backgroundSize: "cover" }}>
        <Container display="flex" alignItems="center">
          <Box display="grid" maxWidth="md" alignItems="center">
            <Box maxWidth="sm">
              <Typography variant="h2" color="green">
                Great Website Add Great Value
              </Typography>
              <Typography variant="h5" >
                Offer Full Service media to your clients.
              </Typography></Box>
            <Box display="flex">
              <Button variant="contained" sx={{ marginY: 2, backgroundColor: "green" }}>Get Quote</Button>
              <Button variant="outlined" sx={{ margin: 2 }}>Our PortFolio</Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box paddingTop="5vh"><Container>
        <Typography variant='h3'>Services We Provide</Typography>
        <Divider variant='middle' />
        <Box>
          <ServicesMap />
        </Box>
      </Container>
      </Box>
      <Box paddingTop="5vh">
        <Container>
          <Box>
            <Typography variant="h3">Reason for Choosing Us</Typography>
          </Box>
          <Divider />
          <Box marginTop="10vh" display="flex" justifyContent="space-between">
            <Box width="60vw">
              <Typography variant='h5'>We Lead The Front</Typography>
              <Typography >The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Typography>
              <Box>
                <List display="flex">
                  <ListItem><ListItemIcon><Brightness1Icon htmlColor='Green' /></ListItemIcon> <ListItemText>Lorem</ListItemText></ListItem>
                  <ListItem><ListItemIcon><Brightness1Icon htmlColor='Green' /></ListItemIcon> <ListItemText>Lorem</ListItemText></ListItem>
                  <ListItem><ListItemIcon><Brightness1Icon htmlColor='Green' /></ListItemIcon> <ListItemText>Lorem</ListItemText></ListItem>
                </List>
              </Box>
            </Box>
            <Box borderTop="3px solid Black" width="30vw">
              <Typography variant='h5' marginY="2vh"> Contact Us</Typography>
              <TextField variant='standard' fullWidth sx={{ marginY: "1vh" }} placeholder="Name"></TextField>
              <TextField variant='standard' fullWidth sx={{ marginY: "1vh" }} placeholder="Name"></TextField>
              <TextField variant='standard' fullWidth sx={{ marginY: "1vh" }} placeholder="Name"></TextField>
              <TextField variant='standard' fullWidth sx={{ marginY: "1vh" }} placeholder="Name"></TextField>
              <Box>
                <Button></Button>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>

    </>
  )
}

export default HomePage
