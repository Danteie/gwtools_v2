import React, { useState } from "react";

const GnwoEuAd= () => {

    const [qa, setGwEu] = useState(null);

    function getGnwoEuDiv(){
        switch(qa){
            case "1":
                return(
                    <div>
                        <h3>Daily News AM </h3>
                        <hr/>
                        gw_dnam_bulletin_top_mon_eu<br/>
                        gw_dnam_bulletin_middle_mrec_mon_eu<br/>
                        gw_dnam_bulletin_center_mon_eu<br/>
                        gw_dnam_bulletin_bottom_mon_eu<br/>
                        gw_dnam_bulletin_bottom_2_mon_eu<br/>
                        gw_dnam_bulletin_footer1_mon_eu<br/>
                        gw_dnam_bulletin_footer2_mon_eu<br/>
                        gw_dnam_bulletin_footer3_mon_eu<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_mon_eu<br/>
                        gw_dnpm_bulletin_middle_mrec_mon_eu<br/>
                        gw_dnpm_bulletin_center_mon_eu<br/>
                        gw_dnpm_bulletin_bottom_mon_eu<br/>
                        gw_dnpm_bulletin_bottom_2_mon_eu<br/>
                        gw_dnpm_bulletin_footer1_mon_eu<br/>
                        gw_dnpm_bulletin_footer2_mon_eu<br/>
                        gw_dnpm_bulletin_footer3_mon_eu<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_mon_eu<br/>
                        gw_dsbl_bulletin_center_mon_eu<br/>
                        gw_dsbl_bulletin_bottom_mon_eu<br/>
                        gw_dsbl_bulletin_bottom_2_mon_eu<br/>
                        gw_dsbl_bulletin_footer1_mon_eu<br/>
                        gw_dsbl_bulletin_footer2_mon_eu<br/>
                        gw_dsbl_bulletin_footer3_mon_eu<br/>
                    </div>
                )
                
            case "2":
                return (
                    <div>
                        <h3>Daily News AM</h3>
                        <hr/>
                        gw_dnam_bulletin_top_tue_eu<br/>
                        gw_dnam_bulletin_middle_mrec_tue_eu<br/>
                        gw_dnam_bulletin_center_tue_eu<br/>
                        gw_dnam_bulletin_bottom_tue_eu<br/>
                        gw_dnam_bulletin_bottom_2_tue_eu<br/>
                        gw_dnam_bulletin_footer1_tue_eu<br/>
                        gw_dnam_bulletin_footer2_tue_eu<br/>
                        gw_dnam_bulletin_footer3_tue_eu<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_tue_eu<br/>
                        gw_dnpm_bulletin_middle_mrec_tue_eu<br/>
                        gw_dnpm_bulletin_center_tue_eu<br/>
                        gw_dnpm_bulletin_bottom_tue_eu<br/>
                        gw_dnpm_bulletin_bottom_2_tue_eu<br/>
                        gw_dnpm_bulletin_footer1_tue_eu<br/>
                        gw_dnpm_bulletin_footer2_tue_eu<br/>
                        gw_dnpm_bulletin_footer3_tue_eu<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_tue_eu<br/>
                        gw_dsbl_bulletin_center_tue_eu<br/>
                        gw_dsbl_bulletin_bottom_tue_eu<br/>
                        gw_dsbl_bulletin_bottom_2_tue_eu<br/>
                        gw_dsbl_bulletin_footer1_tue_eu<br/>
                        gw_dsbl_bulletin_footer2_tue_eu<br/>
                        gw_dsbl_bulletin_footer3_tue_eu<br/>
                    </div>
                )
            case "3":
                return (
                    <div>
                        <h3>Daily News AM</h3>
                        <hr/>
                        gw_dnam_bulletin_top_wed_eu<br/>
                        gw_dnam_bulletin_middle_mrec_wed_eu<br/>
                        gw_dnam_bulletin_center_wed_eu<br/>
                        gw_dnam_bulletin_bottom_wed_eu<br/>
                        gw_dnam_bulletin_bottom_2_wed_eu<br/>
                        gw_dnam_bulletin_footer1_wed_eu<br/>
                        gw_dnam_bulletin_footer2_wed_eu<br/>
                        gw_dnam_bulletin_footer3_wed_eu<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_tue_eu<br/>
                        gw_dnpm_bulletin_middle_mrec_wed_eu<br/>
                        gw_dnpm_bulletin_center_wed_eu<br/>
                        gw_dnpm_bulletin_bottom_wed_eu<br/>
                        gw_dnpm_bulletin_bottom_2_wed_eu<br/>
                        gw_dnpm_bulletin_footer1_wed_eu<br/>
                        gw_dnpm_bulletin_footer2_wed_eu<br/>
                        gw_dnpm_bulletin_footer3_wed_eu<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_wed_eu<br/>
                        gw_dsbl_bulletin_center_wed_eu<br/>
                        gw_dsbl_bulletin_bottom_wed_eu<br/>
                        gw_dsbl_bulletin_bottom_2_wed_eu<br/>
                        gw_dsbl_bulletin_footer1_wed_eu<br/>
                        gw_dsbl_bulletin_footer2_wed_eu<br/>
                        gw_dsbl_bulletin_footer3_wed_eu<br/>
                    </div>
                )
            case "4":
                return <div>
                        <h3>Daily News AM</h3>
                        <hr/> 
                        gw_dnam_bulletin_top_thu_eu<br/>
                        gw_dnam_bulletin_middle_mrec_thu_eu<br/>
                        gw_dnam_bulletin_center_thu_eu<br/>
                        gw_dnam_bulletin_bottom_thu_eu<br/>
                        gw_dnam_bulletin_bottom_2_thu_eu<br/>
                        gw_dnam_bulletin_footer1_thu_eu<br/>
                        gw_dnam_bulletin_footer2_thu_eu<br/>
                        gw_dnam_bulletin_footer3_thu_eu<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_middle_mrec_thu_eu<br/>
                        gw_dnpm_bulletin_center_thu_eu<br/>
                        gw_dnpm_bulletin_bottom_thu_eu<br/>
                        gw_dnpm_bulletin_bottom_2_thu_eu<br/>
                        gw_dnpm_bulletin_footer1_thu_eu<br/>
                        gw_dnpm_bulletin_footer2_thu_eu<br/>
                        gw_dnpm_bulletin_footer3_thu_eu<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_thu_eu<br/>
                        gw_dsbl_bulletin_center_thu_eu<br/>
                        gw_dsbl_bulletin_bottom_thu_eu<br/>
                        gw_dsbl_bulletin_bottom_2_thu_eu<br/>
                        gw_dsbl_bulletin_footer1_thu_eu<br/>
                        gw_dsbl_bulletin_footer2_thu_eu<br/>
                        gw_dsbl_bulletin_footer3_thu_eu<br/>
                    </div>;
            case "5":
                return <div>
                        <h3>Daily News AM</h3>
                        <hr/>
                        gw_dnam_bulletin_top_fri_eu<br/>
                        gw_dnam_bulletin_middle_mrec_fri_eu<br/>
                        gw_dnam_bulletin_center_fri_eu<br/>
                        gw_dnam_bulletin_bottom_fri_eu<br/>
                        gw_dnam_bulletin_bottom_2_fri_eu<br/>
                        gw_dnam_bulletin_footer1_fri_eu<br/>
                        gw_dnam_bulletin_footer2_fri_eu<br/>
                        gw_dnam_bulletin_footer3_fri_eu<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_fri_eu<br/>
                        gw_dnpm_bulletin_middle_mrec_fri_eu<br/>
                        gw_dnpm_bulletin_center_fri_eu<br/>
                        gw_dnpm_bulletin_bottom_fri_eu<br/>
                        gw_dnpm_bulletin_bottom_2_fri_eu<br/>
                        gw_dnpm_bulletin_footer1_fri_eu<br/>
                        gw_dnpm_bulletin_footer2_fri_eu<br/>
                        gw_dnpm_bulletin_footer3_fri_eu<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_fri_eu<br/>
                        gw_dsbl_bulletin_center_fri_eu<br/>
                        gw_dsbl_bulletin_bottom_fri_eu<br/>
                        gw_dsbl_bulletin_bottom_2_fri_eu<br/>
                        gw_dsbl_bulletin_footer1_fri_eu<br/>
                        gw_dsbl_bulletin_footer2_fri_eu<br/>
                        gw_dsbl_bulletin_footer3_fri_eu<br/>
                       </div>;
            default:
                return null;
        }
    }

    return (
        <div>
        <div>
            <label>Izaberite Dan  </label>
            <select 
            onClick={(event) => {
                // here set target value to state which is 1, 2, 3
                setGwEu(event.target.value);
            }}>
                <option defaultValue></option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
            </select>
        </div>
        <div className="flex">
            {getGnwoEuDiv()}
        </div>
            
        </div>
    )
}

export default GnwoEuAd;
