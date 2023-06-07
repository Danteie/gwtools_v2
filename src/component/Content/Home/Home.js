import React, { Component } from "react";
import work from './work.png'
import './Home.css'
import Fun from "../../Fun/Fun";
import Payday from '../../Payday/Payday'


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

    render(){
        return (
            <div className="home h-100">
                <img src={work} className='center' alt="work"/>
        <div className='flex w-100'>
            <Fun />
            <Payday/>
        </div>
            </div> 
        )
              
    }
}

export default Home;