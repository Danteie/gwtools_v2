import React, { useState } from "react";
import { MenuItem, Paper,Select,FormControl,FormHelperText} from "@mui/material";
import Gnwo from './GnwoAd'
import Gdxo from './GdxoAd'
import Gpo from './GpoAd'
import GnwoEu from './GnwoEuAd'
import GdxoEu from './GdxoEuAd'


export default function AdUnits() {

    const [qa, setAd] = useState(1);

    function getQaDiv(){
        console.log(qa);
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
        <Paper className="pa4 h-100 w-100 new" style={{backgroundColor:'#121212',color:"white",minHeight: "70rem"}} >
         <div className="flex center">
                <FormControl sx={{ m: 4, width: 300 }}>
                    <Select  style={{backgroundColor:'white'}}
                    onChange={(event) => {
                        // here set target value to state which is 1, 2, 3
                        setAd(event.target.value);
                    }}>
                        <MenuItem value=""></MenuItem>
                        <MenuItem value='1'>GNWO</MenuItem>
                        <MenuItem value="2">GDXO</MenuItem>
                        <MenuItem value="3">GPO</MenuItem>
                        <MenuItem value="4">GNWO EU</MenuItem>
                        <MenuItem value="5">GDXO EU</MenuItem>
                    </Select>
                    <FormHelperText style={{color:'white'}}>Izaberite Site</FormHelperText>
                </FormControl>
            <div className="flex">
                {getQaDiv()}
            </div>
        </div>   
        </Paper>
    )
}

