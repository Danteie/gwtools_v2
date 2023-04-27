import React, { useState } from "react";

const GpoAd= () => {

    const [qa, setGp] = useState(null);

    function getGpoDiv(){
        switch(qa){
            case "1":
                return <div>
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
                    </div>
            case "2":
                return <div>
                        <h3>Daily News</h3>
                        <hr/>
                        pon_dnam_bulletin_toptue<br/>
                        pon_dnam_bulletin_middle_mrec_tue<br/>
                        pon_dnam_bulletin_center_tue<br/>
                        pon_dnam_bulletin_bottom_tue<br/>
                        pon_dnam_bulletin_bottom2_tue<br/>
                        pon_dnam_bulletin_footer1_tue<br/>
                        pon_dnam_bulletin_footer2_tue<br/>
                        pon_dnam_bulletin_footer3_tue<br/>
                        <h3>Precision Oncology</h3>
                        <hr/>
                        pon_precision_oncology_bulletin_top_tue<br/>
                        pon_precision_oncology_bulletin_middle_mrec_tue<br/>
                        pon_precision_oncology_bulletin_center_tue<br/>
                        pon_precision_oncology_bulletin_bottom_tue<br/>
                        pon_precision_oncology_bulletin_bottom2_tue<br/>
                        pon_precision_oncology_bulletin_footer1_tue<br/>
                        pon_precision_oncology_bulletin_footer2_tue<br/>
                        pon_precision_oncology_bulletin_footer3_tue<br/>
                        <br/>
                        <br/>
                    </div>
            case "3":
                return <div>
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
                return <div>
                       <h3>Daily News</h3>
                        <hr/>
                        pon_dnam_bulletin_top_thu<br/>
                        pon_dnam_bulletin_middle_mrec_thu<br/>
                        pon_dnam_bulletin_center_thu<br/>
                        pon_dnam_bulletin_bottom_thu<br/>
                        pon_dnam_bulletin_bottom2_thu<br/>
                        pon_dnam_bulletin_footer1_thu<br/>
                        pon_dnam_bulletin_footer2_thu<br/>
                        pon_dnam_bulletin_footer3_thu<br/>
                        <h3>Precision Oncology</h3>
                        <hr/>
                        pon_precision_oncology_bulletin_top_thu<br/>
                        pon_precision_oncology_bulletin_middle_mrec_thu<br/>
                        pon_precision_oncology_bulletin_center_thu<br/>
                        pon_precision_oncology_bulletin_bottom_thu<br/>
                        pon_precision_oncology_bulletin_bottom2_thu<br/>
                        pon_precision_oncology_bulletin_footer1_thu<br/>
                        pon_precision_oncology_bulletin_footer2_thu<br/>
                        pon_precision_oncology_bulletin_footer3_thu<br/>
                        <br/>
                        <br/>
                    </div>;
            case "5":
                return <div>
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
        <div>
            <label>Izaberite Dan  </label>
            <select 
            onClick={(event) => {
                // here set target value to state which is 1, 2, 3
                setGp(event.target.value);
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
            {getGpoDiv()}
        </div>
            
        </div>
    )
}

export default GpoAd;
