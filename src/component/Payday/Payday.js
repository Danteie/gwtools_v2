import React from "react";
import "./Payday.css"

const Menu = () => {
    let newDate = new Date()
    let date = ('0' + newDate.getDate()).slice(-2);
    let day = 29 - date

    return(
        <div className=" ma2 pa2 mt4 frame">
                <h2 className="center">PAYDAY</h2>
                <hr/>
                <h2 className="center f2 tc">{day}</h2>    
            </div>
    )
}

export default Menu;
