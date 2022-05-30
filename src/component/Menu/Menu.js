import React from "react";
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {

    return(
        <menu className="flex flex-column ba br2 pa2 ma2 bg-c">
            <Link to="/webinar"><button  id='webinar'>WEBINAR</button></Link>
            <Link to="/ttbl"><button  id='ttbl'>TTBL</button></Link>
            <Link to="/qa"><button  id='qa'>Qa</button></Link>
            <button  id="ad">AD UNITS</button>
        </menu>
    )
}

export default Menu;
