import React, { useState } from "react";
import QaWeb from './QaWeb'
import QaClick from './QaClick'
import QaSpon from './QaSpon'
import { MenuItem, Paper,Select,FormControl,FormHelperText} from "@mui/material";
export default function Qa() {

    const [qa, setQa] = useState(null);

    function inputReset() {
        const getInput = document.getElementsByTagName("input")
        for (let index = 0; index < getInput.length; index++) {
            if (getInput[index].checked)  getInput[index].checked = false;    
        }
    }

    function getQaDiv(){
        switch(qa){
            case "1":
                return <div><QaWeb inputReset={inputReset}/></div>;
            case "2":
                return <div><QaClick inputReset={inputReset}/></div>;
            case "3":
                return <div><QaSpon inputReset={inputReset}/></div>;
            default:
                return null;
        }
    }

    return (
        <Paper className="pa4 h-100 w-100 new" style={{backgroundColor:'#121212',color:"white"}} >
        <div>
        <FormControl sx={{ m: 4, width: 300 }}>
            <Select style={{backgroundColor:'white'}}
            onChange={(event) => {
                // here set target value to state which is 1, 2, 3
                setQa(event.target.value);
            }}>
                <MenuItem defaultValue></MenuItem>
                <MenuItem value="1">Web</MenuItem>
                <MenuItem value="2">Bulletins: Click Tracking</MenuItem>
                <MenuItem value="3">Bulletins: Sponsorship</MenuItem>
            </Select>
            <FormHelperText style={{color:'white'}}>IZAVBERITE VRSTU QA</FormHelperText>
        </FormControl>
        </div>
        <div className="flex">
            {getQaDiv()}
        </div>
            
        </Paper>
    )
}

