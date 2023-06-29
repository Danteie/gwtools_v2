import React, { Component } from "react";
import work from './work.png'
import './Home.css'
import Fun from "../../Fun/Fun";
import Payday from '../../Payday/Payday'
import { Paper,Input,Button } from "@mui/material";


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

 

    render(){

        function testLocal(e) {
            localStorage.setItem('Ime' ,e.target.value)
        }

    

        function noName(e) {
            const lsg = localStorage.getItem('Ime');
            if (lsg.length) {
                document.getElementsByClassName("input-name").state.opacity = "0";
            }else{
                document.getElementsByClassName("input-name").state.opacity = "1";
            }
        }

        return (
        <Paper className="home h-100 w-100" style={{backgroundColor:'#121212'}} >
            {/* <div className="input-name">
                <Input className='ma2 pa2'   onChange={testLocal} style={{backgroundColor:'white'}}/>
                <Button className='ma2 pa2' variant="contained" onClick={noName}>Sumbit</Button>
            </div> */}

            <div className="center-content">
                 <img src={work} className='center' alt="work"/>
            </div>
            <Paper className='flex w-100' style={{backgroundColor:'rgba(255, 255, 255, 0.12)'}}>
                <Fun />
                <Payday/>
            </Paper>
        </Paper> 
        )
              
    }
}

export default Home;