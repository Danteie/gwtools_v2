import React, { useState } from "react";

const GdxoAd= () => {

    const [qa, setGx] = useState(null);

    function getGdxoDiv(){
        switch(qa){
            case "1":
                return <div>
                        <h3>Premium Weekly</h3>
                        <hr/>
                        360dx_premium_weekly_bulletin_top<br/>
                        360dx_premium_weekly_bulletin_center<br/>
                        360dx_premium_weekly_bulletin_bottom<br/>
                        360dx_premium_weekly_bulletin_bottom_2<br/>
                        360dx_premium_weekly_bulletin_footer1<br/>
                        360dx_premium_weekly_bulletin_footer2<br/>
                        360dx_premium_weekly_bulletin_footer3<br/>
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_mon<br/>
                        360dx_dnam_bulletin_middle_mrec_mon<br/>
                        360dx_dnam_bulletin_center_mon<br/>
                        360dx_dnam_bulletin_bottom_mon<br/>
                        360dx_dnam_bulletin_bottom_2_mon<br/>
                        360dx_dnam_bulletin_footer1_mon<br/>
                        360dx_dnam_bulletin_footer2_mon<br/>
                        360dx_dnam_bulletin_footer3_mon<br/>
                    </div>
            case "2":
                return <div>
                        <h3>Molecular Diagnostics</h3>
                        <hr/>
                        360dx_molecular_diagnostics_bulletin_top_tue<br/>
                        360dx_molecular_diagnostics_bulletin_middle_mrec_tue<br/>
                        360dx_molecular_diagnostics_bulletin_center_tue<br/>
                        360dx_molecular_diagnostics_bulletin_bottom_tue<br/>
                        360dx_molecular_diagnostics_bulletin_bottom_2_tue<br/>
                        360dx_molecular_diagnostics_bulletin_footer1_tue<br/>
                        360dx_molecular_diagnostics_bulletin_footer2_tue<br/>
                        360dx_molecular_diagnostics_bulletin_footer3_tue<br/>
                        <h3>Daily News AM</h3>
                        <hr/> 
                        360dx_dnam_bulletin_top_tue<br/>                
                        360dx_dnam_bulletin_middle_mrec_tue<br/>
                        360dx_dnam_bulletin_center_tue<br/>
                        360dx_dnam_bulletin_bottom_tue<br/>
                        360dx_dnam_bulletin_bottom_2_tue<br/>
                        360dx_dnam_bulletin_footer1_tue<br/>
                        360dx_dnam_bulletin_footer2_tue<br/>
                        360dx_dnam_bulletin_footer3_tue<br/>         
                    </div>
            case "3":
                return <div>
                        <h3>Cancer</h3>
                        <hr/>
                        360dx_cancer_bulletin_top<br/>
                        360dx_cancer_bulletin_middle_mrec<br/>
                        360dx_cancer_bulletin_center<br/>
                        360dx_cancer_bulletin_bottom<br/>
                        360dx_cancer_bulletin_bottom_2<br/>
                        360dx_cancer_bulletin_footer1<br/>
                        360dx_cancer_bulletin_footer2<br/>
                        360dx_cancer_bulletin_footer3<br/>
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_wed<br/>
                        360dx_dnam_bulletin_middle_mrec_wed<br/>
                        360dx_dnam_bulletin_center_wed<br/>
                        360dx_dnam_bulletin_bottom_wed<br/>
                        360dx_dnam_bulletin_bottom_2_wed<br/>
                        360dx_dnam_bulletin_footer1_wed<br/>
                        360dx_dnam_bulletin_footer2_wed<br/>
                        360dx_dnam_bulletin_footer3_wed<br/>
                    </div>
            case "4":
                return <div>
                        <h3>Clinical Lab Management</h3>
                        <hr/>
                        360dx_clinical_lab_management_top<br/>
                        360dx_clinical_lab_management_bulletin_middle_mrec<br/>
                        360dx_clinical_lab_management_bulletin_center<br/>
                        360dx_clinical_lab_management_bulletin_bottom<br/>
                        360dx_clinical_lab_management_bulletin_bottom_2<br/>
                        360dx_clinical_lab_management_bulletin_footer1<br/>
                        360dx_clinical_lab_management_bulletin_footer2<br/>
                        360dx_clinical_lab_management_bulletin_footer3<br/>
                        <h3>Point-of-Care</h3>
                        <hr/>
                        360dx_point_of_care_bulletin_top<br/>
                        360dx_point_of_care_bulletin_middle_mrec<br/>
                        360dx_point_of_care_bulletin_center<br/>
                        360dx_point_of_care_bulletin_bottom<br/>
                        360dx_point_of_care_bulletin_bottom_2<br/>
                        360dx_point_of_care_bulletin_footer1<br/>
                        360dx_point_of_care_bulletin_footer2<br/>
                        360dx_point_of_care_bulletin_footer3<br/>
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_thu<br/>
                        360dx_dnam_bulletin_middle_mrec_thu<br/>
                        360dx_dnam_bulletin_center_thu<br/>
                        360dx_dnam_bulletin_bottom_thu<br/>
                        360dx_dnam_bulletin_bottom_2_thu<br/>
                        360dx_dnam_bulletin_footer1_thu<br/>
                        360dx_dnam_bulletin_footer2_thu<br/>
                        360dx_dnam_bulletin_footer3_thu<br/>
                    </div>;
            case "5":
                return <div>
                        <h3>Europe </h3>
                        <hr/>
                        360dx_europe_bulletin_bottom_2<br/>
                        360dx_europe_bulletin_footer1<br/>
                        360dx_europe_bulletin_footer2<br/>
                        360dx_europe_bulletin_footer3<br/>
                        <h3>Infectious Disease</h3>
                        <hr/>
                        360dx_infectious_disease_bulletin_top<br/>
                        360dx_infectious_disease_bulletin_middle_mrec<br/>
                        360dx_infectious_disease_bulletin_center<br/>
                        360dx_infectious_disease_bulletin_bottom<br/>
                        360dx_infectious_disease_bulletin_bottom_2<br/>
                        360dx_infectious_disease_bulletin_footer1<br/>
                        360dx_infectious_disease_bulletin_footer2<br/>
                        360dx_infectious_disease_bulletin_footer3<br/>
                        <h3>Molecular Diagnostics</h3>
                        <hr/>
                        360dx_molecular_diagnostics_bulletin_top_fri<br/>
                        360dx_molecular_diagnostics_bulletin_middle_mrec_fri<br/>
                        360dx_molecular_diagnostics_bulletin_center_fri<br/>
                        360dx_molecular_diagnostics_bulletin_bottom_fri<br/>
                        360dx_molecular_diagnostics_bulletin_bottom_2_fri<br/>
                        360dx_molecular_diagnostics_bulletin_footer1_fri<br/>
                        360dx_molecular_diagnostics_bulletin_footer2_fri<br/>
                        360dx_molecular_diagnostics_bulletin_footer3_fri<br/>
                        <h3>Daily News AM</h3>
                        <hr/>
                        360dx_dnam_bulletin_top_fri<br/>
                        360dx_dnam_bulletin_middle_mrec_fri<br/>
                        360dx_dnam_bulletin_center_fri<br/>
                        360dx_dnam_bulletin_bottom_fri<br/>
                        360dx_dnam_bulletin_bottom_2_fri<br/>
                        360dx_dnam_bulletin_footer1_fri<br/>
                        360dx_dnam_bulletin_footer2_fri<br/>
                        360dx_dnam_bulletin_footer3_fri<br/>
                       </div>;
                case "6":
                    return <div>
                        <h3>Corona</h3>
                        <hr/>
                        360dx_covid19_bulletin_center<br/>
                        360dx_covid19_bulletin_bottom<br/>
                        360dx_covid19_bulletin_bottom_2<br/>
                        360dx_covid19_bulletin_footer1<br/>
                        360dx_covid19_bulletin_footer2<br/>
                        360dx_covid19_bulletin_footer3<br/>
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
                setGx(event.target.value);
            }}>
                <option defaultValue></option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
            </select>
        </div>
        <div className="flex">
            {getGdxoDiv()}
        </div>
            
        </div>
    )
}

export default GdxoAd;
