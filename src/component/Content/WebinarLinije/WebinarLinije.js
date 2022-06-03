import React, { Component } from "react";
import {getCurrentDate} from '../../Utils/Date'

class WebinarLinije extends Component{
    constructor(props) {
        super(props);
        this.state = {
              position : ['LB_01','LB_02','REC_01','REC_02','SR_01','SR_02','SKY_01','NTV'],
        };
      }

    orderName = () => {
        const siteName  = document.getElementById('site-option').value;
        const adverName  = document.getElementById('a-name').value;
        const champName = document.getElementById('c-name').value;
        const orderName = document.getElementById('order-name');
        orderName.innerHTML = `${siteName}_${adverName}_${champName}`
    
    }

    lines = () => {
        const siteName  = document.getElementById('site-option').value;
        const adverName  = document.getElementById('a-name').value;
        const champName = document.getElementById('c-name').value;
        const ntvName = document.getElementById('ntv-option').value;
        const orderName = document.getElementById('lines');
        const date = getCurrentDate("-");
        let lines = [];
        
        for (let index = 0; index < this.state.position.length; index++) {
            
            if (this.state.position[index] === "NTV"){
                //NTV linija
                lines += `${siteName}_${adverName}_${champName}_WBASE_${this.state.position[index]}${ntvName}_${date}</br>`
                orderName.innerHTML = lines; 
                return
            }else{
                 //Rest of the lines
                lines += `${siteName}_${adverName}_${champName}_WBASE_${this.state.position[index]}_${date}</br>`
                orderName.innerHTML = lines;  
            }
           
        }

        console.log(ntvName);
        console.log(lines);
        
    }



    generate = () => {
        this.orderName();
        this.lines();
    }



    render(){
        return (
            <div className="ba br2 pa2 ma2 bg-c w-100">
                <h1 className="center">WEBINAR</h1>
                <div className="w-100 center">
                    <select id='site-option'>
                        <option value="GNWO">GNWO</option>
                        <option value="GDXO">GDXO</option>
                        <option value="GPO">GPO</option>
                    </select>
                    <input type="text" placeholder="ime advertajzera" className="w-100" id='a-name'/>
                    <input type="text" placeholder="kampanja" className="w-100 h2" id='c-name'/>
                    <select id='ntv-option'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
               
                <button type="sumbit" className="w-30 flex items-center center ma2" onClick={this.generate}>GENERISI</button>
                <h1 className="center">Order</h1>
                <p className="center f3" id="order-name">site_advertiser_camp name</p>
                <div id='lines-div'>
                    <h1 className="center">Linije</h1>
                    <p className="center f3" id="lines">site_adv_camp_product_position_date</p>
                </div>
            </div>
        )    
    }
}

export default WebinarLinije;