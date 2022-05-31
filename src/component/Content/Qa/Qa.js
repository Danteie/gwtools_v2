import React, { useState } from "react";
import QaWeb from './QaWeb'
import QaClick from './QaClick'
import QaSpon from './QaSpon'

export default function Qa() {

    const [qa, setQa] = useState(null);

    function getQaDiv(){
        switch(qa){
            case "1":
                return <div><QaWeb/></div>;
            case "2":
                return <div><QaClick/></div>;
            case "3":
                return <div><QaSpon/></div>;
            default:
                return null;
        }
    }

    return (
        <div className="ba br2 pa2 ma2 bg-c w-100">
        <div>
            <label>Izaberite Qa </label>
            <select 
            onClick={(event) => {
                // here set target value to state which is 1, 2, 3
                setQa(event.target.value);
            }}>
                <option defaultValue></option>
                <option value="1">Web</option>
                <option value="2">Bulletins: Click Tracking</option>
                <option value="3">Bulletins: Sponsorship</option>
            </select>
        </div>
        <div className="flex">
            {getQaDiv()}
        </div>
            
        </div>
    )
}

