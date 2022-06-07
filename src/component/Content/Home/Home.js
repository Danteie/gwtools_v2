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
                <h1 className="red center">HOME</h1>
                <div className="file-button-container">
                        <a className="file-button"  rel="noreferrer"y href={WpFile} download="WhitePapers 06.06.2022.docx">WHITE PAPRE FILE</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1Lg1srIdXK_n5XZPyf5ktK2Ev0TUtP1eRHp5cUb9NVcI/edit#gid=1933187957" target="_blank">TASKOVI</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1CJqHUzYR5_1nCxiN58JCM6BuggJ6wWekS-3YnY63BG0/edit#gid=447324662" target="_blank">US BULLETIN SHEET</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1Qh0VKZpAOgBDmukV3gnTYSWqx3TDp5dWE-tFfqv4GBM/edit#gid=447324662" target="_blank">EU BULLETIN SHEET</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/18RU2E5vZJZaxIc1cMwP3BXzqZqB1tYbLCy4QBRCxN-Q/edit#gid=1854943346" target="_blank">WEV KAMPANJE</a>
                    </div>
            </div> 
        )
              
    }
}

export default Home;