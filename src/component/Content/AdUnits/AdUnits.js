import React, { useState } from "react";
import Gnwo from './GnwoAd'
import Gdxo from './GdxoAd'
import Gpo from './GpoAd'
import GnwoEu from './GnwoEuAd'
import GdxoEu from './GdxoEuAd'


export default function AdUnits() {

    const [qa, setAd] = useState(null);

    function getQaDiv(){
        switch(qa){
            case "1":
                return <div><Gnwo/></div>;
            case "2":
                return <div><Gdxo/></div>;
            case "3":
                return <div><Gpo/></div>;
            case "4":
                return <div><GnwoEu/></div>;
            case "5":
                return <div><GdxoEu/></div>;
            default:
                return null;
        }
    }

    return (
        <div className="ba br2 pa2 ma2 bg-c w-100">
        <div>
            <label>Izaberite Site </label>
            <select 
            onClick={(event) => {
                // here set target value to state which is 1, 2, 3
                setAd(event.target.value);
            }}>
                <option defaultValue></option>
                <option value="1">GNWO</option>
                <option value="2">GDXO</option>
                <option value="3">GPO</option>
                <option value="4">GNWO EU</option>
                <option value="5">GDXO EU</option>
            </select>
        </div>
        <div className="flex">
            {getQaDiv()}
        </div>
            
        </div>
    )
}

