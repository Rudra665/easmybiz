import Logo2 from '../../Assets/images/Logo2.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import  Hidden  from '@mui/material/Hidden';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const pages = ['Home','Destinations','Hotels', 'Pricing', 'Experience'];

const NavBar=()=> {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [active, setActive] = React.useState("Home");
   
  
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
 
 
  
    return (
      <>
      <AppBar position="static" sx={{backgroundColor:"black",}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters >
          
            <Box>
                <img width="80vh" src={Logo2}/>
            </Box>
            
            
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"right" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"center",'& :hover':{ borderBottom: "2px solid red"} }}>
          {pages.map((page)=>( 
          <Button color={active===page? "error":"inherit"} sx={{'& :hover':{borderBottom:"2px solid red", transition:"all ease-in-out 2s"}}} onClick={()=>setActive(page)}>{page}</Button>
    ))} </Box>
        </Toolbar>
      </Container>
    </AppBar>
      </>  
    );
}

export default NavBar
