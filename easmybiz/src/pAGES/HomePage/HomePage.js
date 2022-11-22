import { Button, Container, Divider, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import FormValidation from '../../Components/Form/Formik.js'
import CarousalSlider from '../../Components/carousalSlider/CarousalSlider.js'
import Bullet from '../../Assets/images/Bullet-red.png'
import ServicesMap from '../../Components/Service/Service'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Aos from "aos"
function HomePage() {
  // Aos.init()

  // const [x, setX] = useState('bottom');

  // const handleToggle = () => {
  //   setTimeout(() => {
  //     setX("top")
  //   }, timeout);
  // }

  return (
    <React.Fragment>

      <Box className="images">
        <Box className="cf3">
          <Container display="flex" alignItems="center">
            <Box position="absolute" top="30%" left="0%" sx={{ transform: "translate(50%,50%)", zIndex: 2, overflowY: "hidden" }}>
              <Box className="AniText">
                <Box maxWidth="sm" >
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
            </Box>
          </Container>
          <CarousalSlider />
        </Box>
      </Box >
      <Box paddingTop="5vh"><Container>
        <Typography variant='h4' color="#008ccb">Services We Provide</Typography>
        <Divider light />
        <Box>
          <ServicesMap />
        </Box>
      </Container>
      </Box>
      <Box paddingTop="5vh">
        <Container>
          <Box>
            <Typography variant="h4">Reason for Choosing Us</Typography>
          </Box>
          <Divider sx={{
            color: "#F8F8F8"
          }} />

          < Box sx={{ marginBlock: 6, display: "flex", justifyContent: "space-between" }}>
            <Box width="60vw">
              <Typography variant='h5' sx={{ marginY: 2 }}>We Lead The Front</Typography>
              <Typography color="grey" sx={{ marginY: 2, lineHeight: "30px" }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Typography>
              <Box>
                <List display="flex">
                  <ListItem><ListItemIcon><Brightness1Icon htmlColor='#90c404' /></ListItemIcon> <ListItemText>Lorem</ListItemText></ListItem>
                  <ListItem><ListItemIcon><Brightness1Icon htmlColor='#90c404' /></ListItemIcon> <ListItemText>Lorem</ListItemText></ListItem>
                  <ListItem><ListItemIcon><Brightness1Icon htmlColor='#90c404' /></ListItemIcon> <ListItemText>Lorem</ListItemText></ListItem>
                </List>
              </Box>
              <Typography color="grey" sx={{ marginY: 2, lineHeight: "30px" }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Typography>
            </Box>
            <Box borderTop="3px solid Black" width="30vw">
              <FormValidation />
            </Box>
          </Box>
        </Container>
      </Box >

    </React.Fragment >
  )
}

export default HomePage
