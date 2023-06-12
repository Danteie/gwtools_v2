import React, { Component } from "react";
import work from './work.png'
import './Home.css'
import Fun from "../../Fun/Fun";
import Payday from '../../Payday/Payday'
import { Paper } from "@mui/material";


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

    fun  

    render(){

        function testLocal(e) {
            localStorage.setItem('Ime' ,e.target.value)
            console.log(e.target.value);
        }

        function getStorageName(){
            const lsg = localStorage.getItem('Ime');
           if (lsg) {
                return 
           }
        }

        return (
        <Paper className="home h-100 w-100" style={{backgroundColor:'#121212'}} >
            <input onChange={testLocal}/>
            <button onClick={getStorageName}/>
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