import Logo2 from '../../Assets/images/Logo2.png'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Fade from '@mui/material/Fade';
import { List, ListItem } from '@mui/material';
const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = () => {
        setAnchorEl(true);
    };
    const handleClose = () => {
        setAnchorEl(false);
    };

    return (
        <AppBar className='appbar' sx={{ top: 0, position: "absolute", backgroundColor:"black", height:"10vh" }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters >
                   
                   <Box position="absolute">
                        <img width="100vh" src={Logo2}/>
                        </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },   }}>
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

                            <MenuItem onClick={handleCloseNavMenu} sx={{'& :hover':{borderBottom:"1px solid red"}}}>
                                <Typography textAlign="center"    >Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{'& :hover':{borderBottom:"1px solid red"}}}>
                                <Typography textAlign="center"   >About Us</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{'& :hover':{borderBottom:"1px solid red"}}}>
                                <Typography textAlign="center"   >Services</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{'& :hover':{borderBottom:"1px solid red"}}}>
                                <Typography textAlign="center"   >Refund Policy</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{'& :hover':{borderBottom:"1px solid red"}}}>
                                <Typography textAlign="center"   >Contact Us</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{'& :hover':{borderBottom:"1px solid red"}}}>
                                <Typography textAlign="center"   >Clients</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg:"flex", xl:"flex" },justifyContent:"center", alignItems:"center" }}>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white','& :hover':{borderBottom:"2px solid red"}}}
                        >
                            <Typography variant="p">Home</Typography>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', '& :hover':{borderBottom:"2px solid Red"}}}
                        >
                            <Typography variant="p">About Us</Typography>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', '& :hover':{borderBottom:"2px solid Red"}}}
                        >
                            <Typography variant="p">Services</Typography>
                        </Button>
                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', '& :hover':{borderBottom:"2px solid Red"}}}
                        >
                            <Typography variant="p">Refund Policy</Typography>
                        </Button>
                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', '& :hover':{borderBottom:"2px solid Red"}}}
                        >
                            <Typography variant="p">Contact Us</Typography>
                        </Button>
                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', '& :hover':{borderBottom:"2px solid Red"}}}
                        >
                            <Typography variant="p">Clients</Typography>
                        </Button>
                        
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    )
}

export default NavBar
