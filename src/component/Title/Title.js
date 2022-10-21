import React from "react";
import {Link} from 'react-router-dom'
import dna from './DNA.png'
import {getCurrentDate} from '../../component/Utils/Date'

const Title = () => {
    return(
        <div className="title">
            <Link to="/">
                <div className="logo">
                <img src={dna} className="flex justify-center title logo-image" alt="logo"/>
                <h1 className="logoName">TOOL</h1>
                </div>
            </Link>
            <h1 className="date-top"> DATE : {getCurrentDate('-')}</h1>
             {/* <div className="file-button-container">
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1Lg1srIdXK_n5XZPyf5ktK2Ev0TUtP1eRHp5cUb9NVcI/edit#gid=1933187957" target="_blank">TASKOVI</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1CJqHUzYR5_1nCxiN58JCM6BuggJ6wWekS-3YnY63BG0/edit#gid=447324662" target="_blank">US BULLETIN SHEET</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1Qh0VKZpAOgBDmukV3gnTYSWqx3TDp5dWE-tFfqv4GBM/edit#gid=447324662" target="_blank">EU BULLETIN SHEET</a>
                        <a className="file-button"  rel="noreferrer" href="https://docs.google.com/spreadsheets/d/18RU2E5vZJZaxIc1cMwP3BXzqZqB1tYbLCy4QBRCxN-Q/edit#gid=1854943346" target="_blank">WEB KAMPANJE</a>
            </div> */}
        </div>
    )
}

export default Title;
