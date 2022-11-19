import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css"
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { color } from '@mui/system';






const Search = () => {
    return (
        <div className='search'>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" >
                    <Box display="flex" alignItems="center">
                        <Button ><SearchIcon htmlColor="grey" /></Button>
                        <TextField variant='standard' InputProps={{ disableUnderline: "true" }} placeholder='Search'></TextField >
                    </Box>
                    <Box display="flex" alignItems="center" >
                        <Link sx={{ textDecoration: "none", cursor: "pointer", color: "grey", "& :hover": { color: "#4CBB17" } }}>
                            <Box display="flex" >
                                <LocalPhoneOutlinedIcon />
                                <Typography marginX="1vw">0422-84728</Typography>
                            </Box>
                        </Link>
                        <Divider orientation='vertical' variant="middle" flexItem />
                        <Box display="flex" marginLeft="1vw">
                            <Link sx={{ textDecoration: "none", cursor: "pointer", color: "grey", "& :hover": { color: "#4CBB17" } }}>
                                <Box display="flex">
                                    <MailOutlineOutlinedIcon />
                                    <Typography marginLeft="1vw">easmybiz@gmail.com</Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container >
        </div >
    )
}

export default Search
