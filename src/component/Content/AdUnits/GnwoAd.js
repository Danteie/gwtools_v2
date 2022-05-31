import React, { useState } from "react";

const GnwoAd= () => {

    const [qa, setGw] = useState(null);

    function getGnwoDiv(){
        switch(qa){
            case "1":
                return(
                    <div>
                        <h3>Weekly Roundup</h3>
                        <hr/>
                        gw_weekly_roundup_bulletin_top<br/>
                        gw_weekly_roundup_bulletin_bottom_2<br/>
                        gw_weekly_roundup_bulletin_footer1<br/>
                        gw_weekly_roundup_bulletin_footer2<br/>
                        gw_weekly_roundup_bulletin_footer3<br/>
                        <h3>Cancer</h3>
                        <hr/>
                        gw_cancer_bulletin_middle_mrec_mon<br/>
                        gw_cancer_bulletin_center_mon<br/>
                        gw_cancer_bulletin_bottom_mon<br/>
                        gw_cancer_bulletin_bottom_2_mon<br/>
                        gw_cancer_bulletin_footer1_mon<br/>
                        gw_cancer_bulletin_footer2_mon<br/>
                        gw_cancer_bulletin_footer3_mon<br/>
                        <h3>Molecular Diagnostics</h3>
                        <hr/>
                        gw_molecular_diagnostics_bulletin_middle_mrec_mon<br/>
                        gw_molecular_diagnostics_bulletin_center_mon<br/>
                        gw_molecular_diagnostics_bulletin_bottom_mon<br/>
                        gw_molecular_diagnostics_bulletin_bottom_2_mon<br/>
                        gw_molecular_diagnostics_bulletin_footer1_mon<br/>
                        gw_molecular_diagnostics_bulletin_footer2_mon<br/>
                        gw_molecular_diagnostics_bulletin_footer3_mon<br/>
                        <h3>Daily News AM </h3>
                        <hr/>
                        gw_dnam_bulletin_top_mon<br/>
                        gw_dnam_bulletin_middle_mrec_mon<br/>
                        gw_dnam_bulletin_center_mon<br/>
                        gw_dnam_bulletin_bottom_mon<br/>
                        gw_dnam_bulletin_bottom_2_mon<br/>
                        gw_dnam_bulletin_footer1_mon<br/>
                        gw_dnam_bulletin_footer2_mon<br/>
                        gw_dnam_bulletin_footer3_mon<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_mon<br/>
                        gw_dnpm_bulletin_middle_mrec_mon<br/>
                        gw_dnpm_bulletin_center_mon<br/>
                        gw_dnpm_bulletin_bottom_mon<br/>
                        gw_dnpm_bulletin_bottom_2_mon<br/>
                        gw_dnpm_bulletin_footer1_mon<br/>
                        gw_dnpm_bulletin_footer2_mon<br/>
                        gw_dnpm_bulletin_footer3_mon<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_mon<br/>
                        gw_dsbl_bulletin_center_mon<br/>
                        gw_dsbl_bulletin_bottom_mon<br/>
                        gw_dsbl_bulletin_bottom_2_mon<br/>
                        gw_dsbl_bulletin_footer1_mon<br/>
                        gw_dsbl_bulletin_footer2_mon<br/>
                        gw_dsbl_bulletin_footer3_mon<br/>
                    </div>
                )
                
            case "2":
                return (
                    <div>
                        <h3>Sequencing</h3>
                        <hr/>
                        gw_sequencing_bulletin_top_tue<br/>
                        gw_sequencing_bulletin_middle_mrec_tue<br/>
                        gw_sequencing_bulletin_center_tue<br/>
                        gw_sequencing_bulletin_bottom_tue<br/>
                        gw_sequencing_bulletin_bottom_2_tue<br/>
                        gw_sequencing_bulletin_footer1_tue<br/>
                        gw_sequencing_bulletin_footer2_tue<br/>
                        gw_sequencing_bulletin_footer3_tue<br/>
                        <h3>Proteomics/Protein Research</h3>
                        <hr/>
                        gw_proteomics_bulletin_middle_mrec<br/>
                        gw_proteomics_bulletin_center<br/>
                        gw_proteomics_bulletin_bottom<br/>
                        gw_proteomics_bulletin_bottom_2<br/>
                        gw_proteomics_bulletin_footer1<br/>
                        gw_proteomics_bulletin_footer2<br/>
                        gw_proteomics_bulletin_footer3<br/>
                        <h3>Daily News AM</h3>
                        <hr/>
                        gw_dnam_bulletin_top_tue<br/>
                        gw_dnam_bulletin_middle_mrec_tue<br/>
                        gw_dnam_bulletin_center_tue<br/>
                        gw_dnam_bulletin_bottom_tue<br/>
                        gw_dnam_bulletin_bottom_2_tue<br/>
                        gw_dnam_bulletin_footer1_tue<br/>
                        gw_dnam_bulletin_footer2_tue<br/>
                        gw_dnam_bulletin_footer3_tue<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_tue<br/>
                        gw_dnpm_bulletin_middle_mrec_tue<br/>
                        gw_dnpm_bulletin_center_tue<br/>
                        gw_dnpm_bulletin_bottom_tue<br/>
                        gw_dnpm_bulletin_bottom_2_tue<br/>
                        gw_dnpm_bulletin_footer1_tue<br/>
                        gw_dnpm_bulletin_footer2_tue<br/>
                        gw_dnpm_bulletin_footer3_tue<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_tue<br/>
                        gw_dsbl_bulletin_center_tue<br/>
                        gw_dsbl_bulletin_bottom_tue<br/>
                        gw_dsbl_bulletin_bottom_2_tue<br/>
                        gw_dsbl_bulletin_footer1_tue<br/>
                        gw_dsbl_bulletin_footer2_tue<br/>
                        gw_dsbl_bulletin_footer3_tue<br/>
                    </div>
                )
            case "3":
                return (
                    <div>
                        <h3>PCR</h3>
                        <hr/>
                        gw_pcr_bulletin_top<br/>
                        gw_pcr_bulletin_middle_mrec_wed<br/>
                        gw_pcr_bulletin_top_center_wed<br/>
                        gw_pcr_bulletin_top_bottom_wed<br/>
                        gw_pcr_bulletin_top_footer1_wed<br/>
                        gw_pcr_bulletin_top_footer2_wed<br/>
                        gw_pcr_bulletin_top_footer3_wed<br/>
                        <h3>Informatics</h3>
                        <hr/>
                        gw_informatics_bulletin_top_wed<br/>
                        gw_informatics_bulletin_middle_mrec_wed<br/>
                        gw_informatics_bulletin_center_wed<br/>
                        gw_informatics_bulletin_bottom_wed<br/>
                        gw_informatics_bulletin_bottom_2_wed<br/>
                        gw_informatics_bulletin_footer1_wed<br/>
                        gw_informatics_bulletin_footer2_wed<br/>
                        gw_informatics_bulletin_footer3_wed<br/>
                        <h3>Daily News AM</h3>
                        <hr/>
                        gw_dnam_bulletin_top_wed<br/>
                        gw_dnam_bulletin_middle_mrec_wed<br/>
                        gw_dnam_bulletin_center_wed<br/>
                        gw_dnam_bulletin_bottom_wed<br/>
                        gw_dnam_bulletin_bottom_2_wed<br/>
                        gw_dnam_bulletin_footer1_wed<br/>
                        gw_dnam_bulletin_footer2_wed<br/>
                        gw_dnam_bulletin_footer3_wed<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_tue<br/>
                        gw_dnpm_bulletin_middle_mrec_wed<br/>
                        gw_dnpm_bulletin_center_wed<br/>
                        gw_dnpm_bulletin_bottom_wed<br/>
                        gw_dnpm_bulletin_bottom_2_wed<br/>
                        gw_dnpm_bulletin_footer1_wed<br/>
                        gw_dnpm_bulletin_footer2_wed<br/>
                        gw_dnpm_bulletin_footer3_wed<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_wed<br/>
                        gw_dsbl_bulletin_center_wed<br/>
                        gw_dsbl_bulletin_bottom_wed<br/>
                        gw_dsbl_bulletin_bottom_2_wed<br/>
                        gw_dsbl_bulletin_footer1_wed<br/>
                        gw_dsbl_bulletin_footer2_wed<br/>
                        gw_dsbl_bulletin_footer3_wed<br/>
                    </div>
                )
            case "4":
                return <div>4</div>;
            case "5":
                return <div>5</div>;
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
                setGw(event.target.value);
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
            {getGnwoDiv()}
        </div>
            
        </div>
    )
}

export default GnwoAd;
