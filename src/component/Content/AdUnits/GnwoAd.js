import React, { useState } from "react";
import { MenuItem,Select,FormControl,FormHelperText} from "@mui/material";

const GnwoAd= () => {

    const [qa, setGw] = useState(null);

    function getGnwoDiv(){
        switch(qa){
            case "1":
                return(
                    <div className="adunite">
                        <h3>Weekly Roundup</h3>
                        <hr/>
                        gw_weekly_roundup_bulletin_top<br/>
                        gw_weekly_roundup_bulletin_bottom_2<br/>
                        gw_weekly_roundup_bulletin_footer1<br/>
                        gw_weekly_roundup_bulletin_footer2<br/>
                        gw_weekly_roundup_bulletin_footer3<br/>
                        <h3>Cancer</h3>
                        <hr/>
                        gw_cancer_bulletin_top_mon<br/>
                        gw_cancer_bulletin_middle_mrec_mon<br/>
                        gw_cancer_bulletin_center_mon<br/>
                        gw_cancer_bulletin_bottom_mon<br/>
                        gw_cancer_bulletin_bottom_2_mon<br/>
                        gw_cancer_bulletin_footer1_mon<br/>
                        gw_cancer_bulletin_footer2_mon<br/>
                        gw_cancer_bulletin_footer3_mon<br/>
                        <h3>Molecular Diagnostics</h3>
                        <hr/>
                        gw_molecular_diagnostics_bulletin_top_mon<br/>
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
                    <div className="adunite">
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
                        gw_proteomics_bulletin_top<br/>
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
                        <h3>LBBL</h3>
                        <hr/>
                        gw_liquid_biopsy_bulletin_top<br/>
                        gw_liquid_biopsy_bulletin_middle_mrec<br/>
                        gw_liquid_biopsy_bulletin_center<br/>
                        gw_liquid_biopsy_bulletin_bottom<br/>
                        gw_liquid_biopsy_bulletin_bottom_2<br/>
                        gw_liquid_biopsy_bulletin_footer1<br/>
                        gw_liquid_biopsy_bulletin_footer2<br/>
                        gw_liquid_biopsy_bulletin_footer3<br/>
                    </div>
                )
            case "3":
                return (
                    <div className="adunite">
                        <h3>PCR</h3>
                        <hr/>
                        gw_pcr_bulletin_top<br/>
                        gw_pcr_bulletin_middle_mrec<br/>
                        gw_pcr_bulletin_center<br/>
                        gw_pcr_bulletin_bottom<br/>
                        gw_pcr_bulletin_bottom_2<br/>
                        gw_pcr_bulletin_footer1<br/>
                        gw_pcr_bulletin_footer2<br/>
                        gw_pcr_bulletin_footer3<br/>
                        <h3>Informatics</h3>
                        <hr/>
                        gw_informatics_bulletin_top<br/>
                        gw_informatics_bulletin_middle_mrec<br/>
                        gw_informatics_bulletin_center<br/>
                        gw_informatics_bulletin_bottom<br/>
                        gw_informatics_bulletin_bottom_2<br/>
                        gw_informatics_bulletin_footer1<br/>
                        gw_informatics_bulletin_footer2<br/>
                        gw_informatics_bulletin_footer3<br/>
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
                        gw_dnpm_bulletin_top_wed<br/>
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
                return <div className="adunite">
                        <h3>Cancer</h3>
                        <hr/>
                        gw_cancer_bulletin_top_thu<br/>
                        gw_cancer_bulletin_middle_mrec_thu<br/>
                        gw_cancer_bulletin_center_thu<br/>
                        gw_cancer_bulletin_bottom_thu<br/>
                        gw_cancer_bulletin_bottom_2_thu<br/>
                        gw_cancer_bulletin_footer1_thu<br/>
                        gw_cancer_bulletin_footer2_thu<br/>
                        gw_cancer_bulletin_footer3_thu<br/>
                        <h3>Molecular</h3>
                        <hr/>
                        gw_molecular_diagnostics_bulletin_top_thu<br/>
                        gw_molecular_diagnostics_bulletin_middle_mrec_thu<br/>
                        gw_molecular_diagnostics_bulletin_center_thu<br/>
                        gw_molecular_diagnostics_bulletin_bottom_thu<br/>
                        gw_molecular_diagnostics_bulletin_bottom_2_thu<br/>
                        gw_molecular_diagnostics_bulletin_footer1_thu<br/>
                        gw_molecular_diagnostics_bulletin_footer2_thu<br/>
                        gw_molecular_diagnostics_bulletin_footer3_thu<br/>  
                        <h3>Daily News AM</h3>
                        <hr/> 
                        gw_dnam_bulletin_top_thu<br/>
                        gw_dnam_bulletin_middle_mrec_thu<br/>
                        gw_dnam_bulletin_center_thu<br/>
                        gw_dnam_bulletin_bottom_thu<br/>
                        gw_dnam_bulletin_bottom_2_thu<br/>
                        gw_dnam_bulletin_footer1_thu<br/>
                        gw_dnam_bulletin_footer2_thu<br/>
                        gw_dnam_bulletin_footer3_thu<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_thu<br/>
                        gw_dnpm_bulletin_middle_mrec_thu<br/>
                        gw_dnpm_bulletin_center_thu<br/>
                        gw_dnpm_bulletin_bottom_thu<br/>
                        gw_dnpm_bulletin_bottom_2_thu<br/>
                        gw_dnpm_bulletin_footer1_thu<br/>
                        gw_dnpm_bulletin_footer2_thu<br/>
                        gw_dnpm_bulletin_footer3_thu<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_thu<br/>
                        gw_dsbl_bulletin_center_thu<br/>
                        gw_dsbl_bulletin_bottom_thu<br/>
                        gw_dsbl_bulletin_bottom_2_thu<br/>
                        gw_dsbl_bulletin_footer1_thu<br/>
                        gw_dsbl_bulletin_footer2_thu<br/>
                        gw_dsbl_bulletin_footer3_thu<br/>
                    </div>;
            case "5":
                return <div className="adunite">
                        <h3>Europe </h3>
                        <hr/>
                        gw_europe_bulletin_top<br/>
                        gw_europe_bulletin_bottom_2<br/>
                        gw_europe_bulletin_footer1<br/>
                        gw_europe_bulletin_footer2<br/>
                        gw_europe_bulletin_footer3<br/>
                        <h3>Sequencing</h3>
                        <hr/>
                        gw_sequencing_bulletin_top_fri<br/>
                        gw_sequencing_bulletin_middle_mrec_fri<br/>
                        gw_sequencing_bulletin_center_fri<br/>
                        gw_sequencing_bulletin_bottom_fri<br/>
                        gw_sequencing_bulletin_bottom_2_fri<br/>
                        gw_sequencing_bulletin_footer1_fri<br/>
                        gw_sequencing_bulletin_footer2_fri<br/>
                        gw_sequencing_bulletin_footer3_fri<br/>
                        <h3>Daily News AM</h3>
                        <hr/>
                        gw_dnam_bulletin_top_fri<br/>
                        gw_dnam_bulletin_middle_mrec_fri<br/>
                        gw_dnam_bulletin_center_fri<br/>
                        gw_dnam_bulletin_bottom_fri<br/>
                        gw_dnam_bulletin_bottom_2_fri<br/>
                        gw_dnam_bulletin_footer1_fri<br/>
                        gw_dnam_bulletin_footer2_fri<br/>
                        gw_dnam_bulletin_footer3_fri<br/>
                        <h3>Daily News PM</h3>
                        <hr/>
                        gw_dnpm_bulletin_top_fri<br/>
                        gw_dnpm_bulletin_middle_mrec_fri<br/>
                        gw_dnpm_bulletin_center_fri<br/>
                        gw_dnpm_bulletin_bottom_fri<br/>
                        gw_dnpm_bulletin_bottom_2_fri<br/>
                        gw_dnpm_bulletin_footer1_fri<br/>
                        gw_dnpm_bulletin_footer2_fri<br/>
                        gw_dnpm_bulletin_footer3_fri<br/>
                        <h3>Daily Scan</h3>
                        <hr/>
                        gw_dsbl_bulletin_top_fri<br/>
                        gw_dsbl_bulletin_center_fri<br/>
                        gw_dsbl_bulletin_bottom_fri<br/>
                        gw_dsbl_bulletin_bottom_2_fri<br/>
                        gw_dsbl_bulletin_footer1_fri<br/>
                        gw_dsbl_bulletin_footer2_fri<br/>
                        gw_dsbl_bulletin_footer3_fri<br/>
                       </div>;
            default:
                return null;
        }
    }

    return (
        <div>
        <div>
            <FormControl sx={{ m: 4, width: 300 }}>
            <Select style={{backgroundColor:'white'}}
            onChange={(event) => {
                // here set target value to state which is 1, 2, 3
                setGw(event.target.value);
            }}>
                <MenuItem defaultValue></MenuItem>
                <MenuItem value="1">Monday</MenuItem>
                <MenuItem value="2">Tuesday</MenuItem>
                <MenuItem value="3">Wednesday</MenuItem>
                <MenuItem value="4">Thursday</MenuItem>
                <MenuItem value="5">Friday</MenuItem>
            </Select >
            <FormHelperText style={{color:'white'}}>Izaberite Dan</FormHelperText>
            </FormControl>
        </div>
        <div className="offset">
            {getGnwoDiv()}
        </div>
            
        </div>
    )
}

export default GnwoAd;
