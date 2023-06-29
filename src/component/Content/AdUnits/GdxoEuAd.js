import React, { useState } from "react";
import { MenuItem,Select,FormControl,FormHelperText} from "@mui/material";


const GdxoEuAd= () => {

    const [qa, setGxEu] = useState(null);

    function getGdxoEuDiv(){
        switch(qa){
            case "1":
                return <div className="adunite">
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_mon_eu<br/>
                        360dx_dnam_bulletin_middle_mrec_mon_eu<br/>
                        360dx_dnam_bulletin_center_mon_eu<br/>
                        360dx_dnam_bulletin_bottom_mon_eu<br/>
                        360dx_dnam_bulletin_bottom_2_mon_eu<br/>
                        360dx_dnam_bulletin_footer1_mon_eu<br/>
                        360dx_dnam_bulletin_footer2_mon_eu<br/>
                        360dx_dnam_bulletin_footer3_mon_eu<br/>
                    </div>
            case "2":
                return <div className="adunite">
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_tue_eu<br/>                
                        360dx_dnam_bulletin_middle_mrec_tue_eu<br/>
                        360dx_dnam_bulletin_center_tue_eu<br/>
                        360dx_dnam_bulletin_bottom_tue_eu<br/>
                        360dx_dnam_bulletin_bottom_2_tue_eu<br/>
                        360dx_dnam_bulletin_footer1_tue_eu<br/>
                        360dx_dnam_bulletin_footer2_tue_eu<br/>
                        360dx_dnam_bulletin_footer3_tue_eu<br/>         
                    </div>
            case "3":
                return <div className="adunite">
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_wed_eu<br/>
                        360dx_dnam_bulletin_middle_mrec_wed_eu<br/>
                        360dx_dnam_bulletin_center_wed_eu<br/>
                        360dx_dnam_bulletin_bottom_wed_eu<br/>
                        360dx_dnam_bulletin_bottom_2_wed_eu<br/>
                        360dx_dnam_bulletin_footer1_wed_eu<br/>
                        360dx_dnam_bulletin_footer2_wed_eu<br/>
                        360dx_dnam_bulletin_footer3_wed_eu<br/>
                    </div>
            case "4":
                return <div className="adunite">
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_thu_eu<br/>
                        360dx_dnam_bulletin_middle_mrec_thu_eu<br/>
                        360dx_dnam_bulletin_center_thu_eu<br/>
                        360dx_dnam_bulletin_bottom_thu_eu<br/>
                        360dx_dnam_bulletin_bottom_2_thu_eu<br/>
                        360dx_dnam_bulletin_footer1_thu_eu<br/>
                        360dx_dnam_bulletin_footer2_thu_eu<br/>
                        360dx_dnam_bulletin_footer3_thu_eu<br/>
                    </div>;
            case "5":
                return <div className="adunite">
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_fri_eu<br/>
                        360dx_dnam_bulletin_center_fri_eu<br/>
                        360dx_dnam_bulletin_bottom_fri_eu<br/>
                        360dx_dnam_bulletin_bottom_2_fri_eu<br/>
                        360dx_dnam_bulletin_footer1_fri_eu<br/>
                        360dx_dnam_bulletin_footer2_fri_eu<br/>
                        360dx_dnam_bulletin_footer3_fri_eu<br/>
                       </div>;
            default:
                return null;
        }
    }

    return (
        <div>
        <FormControl sx={{ m: 4, width: 300 }}>
            <Select style={{backgroundColor:'white'}}
            onChange={(event) => {
                // here set target value to state which is 1, 2, 3
                setGxEu(event.target.value);
            }}>
                <MenuItem defaultValue></MenuItem>
                <MenuItem value="1">Monday</MenuItem>
                <MenuItem value="2">Tuesday</MenuItem>
                <MenuItem value="3">Wednesday</MenuItem>
                <MenuItem value="4">Thursday</MenuItem>
                <MenuItem value="5">Friday</MenuItem>
            </Select>
            <FormHelperText style={{color:'white'}}>Izaberite Dan</FormHelperText>
        </FormControl>
        <div className="offset">
            {getGdxoEuDiv()}
        </div>
        </div>
    )
}

export default GdxoEuAd;
