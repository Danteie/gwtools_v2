import React, { Component } from "react";
import { Paper } from "@mui/material";
import img1 from './nwSetupImg/Newsletter Setup-1.jpg'
import img2 from './nwSetupImg/Newsletter Setup-2.jpg'
import img3 from './nwSetupImg/Newsletter Setup-3.jpg'
import img4 from './nwSetupImg/Newsletter Setup-4.jpg'
import img5 from './nwSetupImg/Newsletter Setup-5.jpg'
import img6 from './nwSetupImg/Newsletter Setup-6.jpg'
import img7 from './nwSetupImg/Newsletter Setup-7.jpg'
import img8 from './nwSetupImg/Newsletter Setup-8.jpg'
import img9 from './nwSetupImg/Newsletter Setup-9.jpg'

class NwSetup extends Component{
    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

    render(){
        return (
            <Paper className="pa4" style={{backgroundColor:'#121212'}} >
                <img src={img1} alt="slika1"></img>
                <img src={img2} alt="slika1"></img>
                <img src={img3} alt="slika1"></img>
                <img src={img4} alt="slika1"></img>
                <img src={img5} alt="slika1"></img>
                <img src={img6} alt="slika1"></img>
                <img src={img7} alt="slika1"></img>
                <img src={img8} alt="slika1"></img>
                <img src={img9} alt="slika1"></img>
            </Paper> 
        )
              
    }
}

export default  NwSetup;