import React, { Component } from "react";
import work from './work.png'


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

    render(){
        return (
            <div className="ba br2 pa2 ma2 bg-c w-100">
                <img src={work} className='center'/>
            </div> 
        )
              
    }
}

export default Home;