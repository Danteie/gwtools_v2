import React, { Component } from "react";
import { Paper,Button } from "@mui/material";

class TTBLLinija extends Component{
    constructor(props) {
        super(props);
        this.state = {
            position: [1,1.1,2,3,4]
        };
      }

    ttblline = () =>{
        const siteName  = document.getElementById('site-option').value;
        const adverName  = document.getElementById('a-name').value;
        const champName = document.getElementById('c-name').value;
        const date = document.getElementById('date').value;
        const orderName = document.getElementById('lines');
        let lines = [];
        for (let index = 0; index < this.state.position.length; index++) {
                lines += `${siteName}_${adverName}_${champName}_TTBL_${this.state.position[index]}_${date}</br>`
                orderName.innerHTML = lines;  
        }
    }


    render(){
        return (
            <Paper elevation={1} style={{backgroundColor:'#121212',minHeight: "70rem"}} className="pa5">
                <h1 className="center">TTBL</h1>
                <div className="w-100 center">
                    <select id='site-option'>
                        <option value="GNWO">GNWO</option>
                        <option value="GDXO">GDXO</option>
                        <option value="GPO">GPO</option>
                    </select>
                    <input type="text" placeholder="ime advertajzera" className="w-100" id='a-name'/>
                    <input type="text" placeholder="kampanja" className="w-100 h2" id='c-name'/>
                    <input type="date" className="w-25" id="date"/>
                </div>
                <div className="w-50 flex items-center center ma4">
                    <Button type="sumbit" variant="contained" style={{width: '20rem'}} onClick={this.ttblline}>GENERISI</Button>
                </div>
                
                <div id='lines-div'>
                    <h1 className="center">Linije</h1>
                    <p className="center f3" id="lines">site_adv_camp_product_position_date</p>
                </div>
            </Paper>
        )
    }
}

export default TTBLLinija;