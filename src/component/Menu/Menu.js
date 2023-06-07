import React from "react";
import './Menu.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

const Menu = () => {

    return(
        <menu className="ba br4 pa2 ma2 bg-c">     
           <Stack spacing={1} direction="row">
            <Link to="/webinar"><Button  variant="contained" id='webinar'>WEBINAR</Button></Link>
            <Link to="/ttbl"><Button variant="contained" id='ttbl'>TTBL</Button></Link>
            <Link to="/qa"><Button variant="contained" id='qa'>Qa</Button></Link>
            <Link to="/ad"><Button variant="contained" id='ad'>AD UNITS</Button></Link>
            <Link to="/naming"><Button  variant="contained" id='naiming'>Naming Conventions</Button></Link>
            <Link to="/nwsetup"><Button  variant="contained" id='ad'>Newsletter Setup</Button></Link>
            <Link to="/websetup"><Button  variant="contained" id='ad'>Web Setup</Button></Link>
            </Stack>
        </menu>
    )
}

export default Menu;
