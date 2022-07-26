import React from "react";
import {Link} from 'react-router-dom'
import WpFile from '../../Assets/White Papers.docx'

const Title = () => {
    return(
        <div className="title">
            <Link to="/"><h1 className="flex justify-center title">GW TOOLS</h1></Link>
             <div className="file-button-container">
                        <a className="file-button"  rel="noreferrer"y href={WpFile} download="WhitePapers 07.21.2022.docx">WHITE PAPRE FILE<br/><p className="small">last update: 2022 07 21</p></a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1Lg1srIdXK_n5XZPyf5ktK2Ev0TUtP1eRHp5cUb9NVcI/edit#gid=1933187957" target="_blank">TASKOVI</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1CJqHUzYR5_1nCxiN58JCM6BuggJ6wWekS-3YnY63BG0/edit#gid=447324662" target="_blank">US BULLETIN SHEET</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1Qh0VKZpAOgBDmukV3gnTYSWqx3TDp5dWE-tFfqv4GBM/edit#gid=447324662" target="_blank">EU BULLETIN SHEET</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/18RU2E5vZJZaxIc1cMwP3BXzqZqB1tYbLCy4QBRCxN-Q/edit#gid=1854943346" target="_blank">WEB KAMPANJE</a>
            </div>
        </div>
    )
}

export default Title;
