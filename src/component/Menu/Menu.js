import React from "react";
import './Menu.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { AppBar } from "@mui/material";
import dna from '../Title/DNA.png'


const Menu = () => {

    return(
        <AppBar position="static" style={{backgroundColor:'#121212'}} className="pa3">     
           <Stack spacing={1} direction="row">
           <Link to="/"><Button  variant="contained" style={{backgroundColor:'black'}} className='logo' id='webinar'> <img src={dna} className="logo-image" alt="logo"/> Home</Button></Link>
            <Link to="/webinar"><Button  variant="contained" id='webinar'>WEBINAR</Button></Link>
            <Link to="/ttbl"><Button variant="contained" id='ttbl'>TTBL</Button></Link>
            <Link to="/qa"><Button variant="contained" id='qa'>Qa</Button></Link>
            <Link to="/ad"><Button variant="contained" id='ad'>AD UNITS</Button></Link>
            <Link to="/naming"><Button  variant="contained" id='naiming'>WEB Targeting</Button></Link>
            <Link to="/nwsetup"><Button  variant="contained" id='ad'>Newsletter Setup</Button></Link>
            <Link to="/websetup"><Button  variant="contained" id='ad'>Web Setup</Button></Link>
            </Stack>
        </AppBar>
    )
}

export default Menu;
