import React, { useState } from "react";
import { MenuItem,Select,FormControl,FormHelperText} from "@mui/material";

const GpoAd= () => {

    const [qa, setGp] = useState(null);

    function getGpoDiv(){
        switch(qa){
            case "1":
                return <div className="adunite">
                        <h3>Daily News</h3>
                        <hr/>
                        pon_dnam_bulletin_top_mon<br/>
                        pon_dnam_bulletin_middle_mrec_mon<br/>
                        pon_dnam_bulletin_center_mon<br/>
                        pon_dnam_bulletin_bottom_mon<br/>
                        pon_dnam_bulletin_bottom2_mon<br/>
                        pon_dnam_bulletin_footer1_mon<br/>
                        pon_dnam_bulletin_footer2_mon<br/>
                        pon_dnam_bulletin_footer3_mon<br/>
                    </div >
            case "2":
                return <div className="adunite">
                        <h3>DNBL - Precision Oncology News Alert</h3>
                        <hr/>
                        pon_dnam_bulletin_toptue<br/>
                        pon_dnam_bulletin_middle_mrec_tue<br/>
                        pon_dnam_bulletin_center_tue<br/>
                        pon_dnam_bulletin_bottom_tue<br/>
                        pon_dnam_bulletin_bottom2_tue<br/>
                        pon_dnam_bulletin_footer1_tue<br/>
                        pon_dnam_bulletin_footer2_tue<br/>
                        pon_dnam_bulletin_footer3_tue<br/>
                        <h3>PABL - Precision Medicine Online News Alert</h3>
                        <hr/>
                        pmo_dnam_bulletin_top_tues<br/>
                        pmo_dnam_bulletin_center_tues<br/>
                        pmo_dnam_bulletin_bottom_tues<br/>
                        pmo_dnam_bulletin_bottom2_tues<br/>
                        pmo_dnam_bulletin_middle_mrec_tues<br/>
                        pmo_dnam_bulletin_footer1_tues<br/>
                        pmo_dnam_bulletin_footer2_tues<br/>
                        pmo_dnam_bulletin_footer3_tues<br/>
                        <br/>
                        <br/>
                    </div>
            case "3":
                return <div className="adunite">
                        <h3>Daily News</h3>
                        <hr/>
                        pon_dnam_bulletin_top_wed<br/>
                        pon_dnam_bulletin_middle_mrec_wed<br/>
                        pon_dnam_bulletin_center_wed<br/>
                        pon_dnam_bulletin_bottom_wed<br/>
                        pon_dnam_bulletin_bottom2_wed<br/>
                        pon_dnam_bulletin_footer1_wed<br/>
                        pon_dnam_bulletin_footer2_wed<br/>
                        pon_dnam_bulletin_footer3_wed<br/>
                    </div>
            case "4":
                return <div className="adunite">
                       <h3>DNBL - Precision Oncology News Alert</h3>
                        <hr/>
                        pon_dnam_bulletin_top_thu<br/>
                        pon_dnam_bulletin_middle_mrec_thu<br/>
                        pon_dnam_bulletin_center_thu<br/>
                        pon_dnam_bulletin_bottom_thu<br/>
                        pon_dnam_bulletin_bottom2_thu<br/>
                        pon_dnam_bulletin_footer1_thu<br/>
                        pon_dnam_bulletin_footer2_thu<br/>
                        pon_dnam_bulletin_footer3_thu<br/>
                        <h3>PABL - Precision Medicine Online News Alert</h3>
                        <hr/>
                        pmo_dnam_bulletin_top_thu<br/>
                        pmo_dnam_bulletin_center_thu<br/>
                        pmo_dnam_bulletin_bottom_thu<br/>
                        pmo_dnam_bulletin_bottom2_thu<br/>
                        pmo_dnam_bulletin_middle_mrec_thu<br/>
                        pmo_dnam_bulletin_footer1_thu<br/>
                        pmo_dnam_bulletin_footer2_thu<br/>
                        pmo_dnam_bulletin_footer3_thu<br/>
                        <br/>
                        <br/>
                    </div>;
            case "5":
                return <div className="adunite">
                        <h3>Daily News</h3>
                        <hr/>
                        pon_dnam_bulletin_top_fri<br/>
                        pon_dnam_bulletin_middle_mrec_fri<br/>
                        pon_dnam_bulletin_center_fri<br/>
                        pon_dnam_bulletin_bottom_fri<br/>
                        pon_dnam_bulletin_bottom2_fri<br/>
                        pon_dnam_bulletin_footer1_fri<br/>
                        pon_dnam_bulletin_footer2_fri<br/>
                        pon_dnam_bulletin_footer3_fri<br/>
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
                setGp(event.target.value);
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
            {getGpoDiv()}
        </div>
            
        </div>
    )
}

export default GpoAd;
