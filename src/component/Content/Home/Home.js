import React, { Component } from "react";
import WpFile from '../../../Assets/White Papers - updated 06.06.2022.docx'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

    render(){
        return (
            <div className="ba br2 pa2 ma2 bg-c w-100">
                <h1 className="red center">NOTES</h1>
                    <h2>Viewable impresion ne zaboraviti kada se setuje web kampanaj u navizi</h2>
                    <h2>Thermo Fisher Scientific Carlsbad kampanje obavzeno exclude Rusiju i Ukrainu</h2>
                    <h2>Somalogic web ima posebna pravila za zemlje</h2>
                    <div>
                        <button className="file-button"><a href={WpFile} download="WhitePapers 06.06.2022.docx">WHITE PAPRE FILE</a></button>
                        <button className="file-button"><a href="https://docs.google.com/spreadsheets/d/1Lg1srIdXK_n5XZPyf5ktK2Ev0TUtP1eRHp5cUb9NVcI/edit#gid=1933187957">TASKOVI</a></button>
                        <button className="file-button"><a href="https://docs.google.com/spreadsheets/d/1CJqHUzYR5_1nCxiN58JCM6BuggJ6wWekS-3YnY63BG0/edit#gid=447324662">US BULLETIN SHEET</a></button>
                        <button className="file-button"><a href="https://docs.google.com/spreadsheets/d/1Qh0VKZpAOgBDmukV3gnTYSWqx3TDp5dWE-tFfqv4GBM/edit#gid=447324662">EU BULLETIN SHEET</a></button>
                    </div>
                    
            </div> 
        )
              
    }
}

export default Home;