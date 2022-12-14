import React, { Component } from "react";
import './Naming.css'
import image from './webpos.png'

class Naming extends Component{
    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

    render(){
        return (
            <div className="ba br4 pa2 ma2 bg-c w-100">
                <h1 className="red center">Naming za Web Kampanje</h1>
                <table className="web-table">
                    <tr className="web-table-title">
                        <td>Channel</td>
                        <td>ChannelAbbv.</td>
                        <td>Priority in GAM</td>
                        <td>Targeting-Key value in GAM</td>
                    </tr>
                    <tr>
                        <td>Basic</td>
                        <td>WBASE</td>
                        <td>low 10</td>
                        <td>www.genomeweb.com</td>
                    </tr>
                    <tr>
                        <td>Cancer</td>
                        <td>WCAN</td>
                        <td>normal 8</td>
                        <td>subchannel=Cancer</td>
                    </tr>
                    <tr>
                        <td>Cell Biology Research</td>
                        <td>WCELL</td>
                        <td>normal 8</td>
                        <td>subchannel=Cell-Biology-Research</td>
                    </tr>
                    <tr>
                        <td>Clinical Proteomics</td>
                        <td>WCLINP</td>
                        <td>normal 8</td>
                        <td>subchannel=Clinical-Proteomics</td>
                    </tr>
                    <tr>
                        <td>Clinical Sequencing</td>
                        <td>WCLINS</td>
                        <td>normal 8</td>
                        <td>subchannel=Clinical-Sequencing</td>
                    </tr>
                    <tr>
                        <td>Companion Diagnostics</td>
                        <td>WCOMP</td>
                        <td>normal 8</td>
                        <td>subchannel=Companion-Diagnostics</td>
                    </tr>
                    <tr>
                        <td>Drug Discovery & Development</td>
                        <td>WDRUG</td>
                        <td>normal 8</td>
                        <td>subchannel=Drug-Discovery-Development</td>
                    </tr>
                    <tr>
                        <td>Gene Expression Research</td>
                        <td>WGENEX</td>
                        <td>normal 8</td>
                        <td>subchannel=Gene-Expression-Research</td>
                    </tr>
                    <tr>
                        <td>Gene Silencing / Gene Editing</td>
                        <td>WRNAI</td>
                        <td>normal 8</td>
                        <td>subchannel=Gene-Silencing-Gene-Editing</td>
                    </tr>
                    <tr>
                        <td>Genetic Research</td>
                        <td>WGENR</td>
                        <td>normal 8</td>
                        <td>subchannel=Genetic-Research</td>
                    </tr>
                    <tr>
                        <td>Informatics</td>
                        <td>WINFO</td>
                        <td>normal 8</td>
                        <td>subchannel=Informatics</td>
                    </tr>
                    <tr>
                        <td>Inherited Disease</td>
                        <td>WINHER</td>
                        <td>normal 8</td>
                        <td>subchannel=Inherited-Disease</td>
                    </tr>
                    <tr>
                        <td>Mass Spec</td>
                        <td>WMASS</td>
                        <td>normal 8</td>
                        <td>subchannel=mass-spectrometry</td>
                    </tr>
                    <tr>
                        <td>Metablolic Disease</td>
                        <td>WMETAB</td>
                        <td>normal 8</td>
                        <td>subchannel=Metabolic-Disease</td>
                    </tr>
                    <tr>
                        <td>Microarrays & Multiplexing</td>
                        <td>WARRA</td>
                        <td>normal 8</td>
                        <td>subchannel=Microarrays-Multiplexing</td>
                    </tr>
                    <tr>
                        <td>Molecular Diagnostics</td>
                        <td>WMDX</td>
                        <td>normal 8</td>
                        <td>subchannel=Molecular-Diagnostics</td>
                    </tr>
                    <tr>
                        <td>Proteomics & Protein Research</td>
                        <td>WPROT</td>
                        <td>normal 8</td>
                        <td>subchannel=Proteomics-Protein-Research</td>
                    </tr>
                    <tr>
                        <td>Sample Prep</td>
                        <td>WSAMP</td>
                        <td>normal 8</td>
                        <td>subchannel=sample-preparation</td>
                    </tr>
                    <tr>
                        <td>Sequencing Technology</td>
                        <td>WSEQ</td>
                        <td>normal 8</td>
                        <td>subchannel=Sequencing</td>
                    </tr>
                    <tr>
                        <td>Tissue-Based Testing</td>
                        <td>WTBT</td>
                        <td>High 8</td>
                        <td>subchannel=tissue-based-testing</td>
                    </tr>
                    <tr className="red">
                        <td>Clinical Lab Management</td>
                        <td><b>WCLINL</b></td>
                        <td>normal 8</td>
                        <td ><b>channel</b>=clinical-lab-management</td>
                    </tr>
                    <tr>
                        <td>Covid - 19</td>
                        <td>WCOV</td>
                        <td>normal 8</td>
                        <td>subchannel=covid-19</td>
                    </tr>
                    <tr>
                        <td>Point of care</td>
                        <td>WPOC</td>
                        <td>normal 8</td>
                        <td>subchannel=point-of-care-testing</td>
                    </tr>
                    <tr className="red">
                        <td>Applied Markets</td>
                        <td><b>WAPP</b></td>
                        <td>High 6</td>
                        <td ><b>channel</b>=Applied-Markets</td>
                    </tr>
                    <tr>
                        <td>Autoimmune Disease</td>
                        <td>WAUTO</td>
                        <td>High 6</td>
                        <td>subchannel=Autoimmune-Disease</td>
                    </tr>
                    <tr>
                        <td>Biomarker Discovery & Validation</td>
                        <td>WBIOM</td>
                        <td>High 6</td>
                        <td>subchannel=Biomarker-Discovery-Validation</td>
                    </tr>
                    <tr>
                        <td>Cardiovascular Disease</td>
                        <td>WCARDIO</td>
                        <td>High 6</td>
                        <td>subchannel=Cardiovascular-Disease</td>
                    </tr>
                    <tr>
                        <td>Epigenetic Research</td>
                        <td>WEPIG</td>
                        <td>High 6</td>
                        <td>subchannel=Epigenetics-Research</td>
                    </tr>
                    <tr>
                        <td>Infectious Disease</td>
                        <td>WINFECT</td>
                        <td>High 6</td>
                        <td>subchannel=Infectious-Disease</td>
                    </tr>
                    <tr>
                        <td>Neurological & Psychological Disease</td>
                        <td>WNEURO</td>
                        <td>High 6</td>
                        <td>subchannel=Neurological-Psychological-Disorders</td>
                    </tr>
                    <tr>
                        <td>PCR</td>
                        <td>WPCR</td>
                        <td>High 6</td>
                        <td>subchannel=PCR</td>
                    </tr>
                    <tr>
                        <td>Reproductive Health</td>
                        <td>WREPRO</td>
                        <td>High 6</td>
                        <td>subchannel=Reproductive-Health</td>
                    </tr>
                   
        </table>
            <hr/>
        <table className="web-table ">
	<tr>
		<h2>BANNERS POSITION</h2>
	</tr>
	<tr className="web-table-title">
		<td>Position Name</td>
		<td>Ad unit in GAM</td>
		<td>Creative Size in GAM</td>
		<td>PositionAbbv</td>
	</tr>
	<tr>
		<td>Leaderboard</td>
		<td>LB_01</td>
		<td>728x90</td>
		<td>LB_01</td>
	</tr>
	<tr>
		<td>Small Rectangle 1</td>
		<td>SR_01</td>
		<td>180x150</td>
		<td>SR_01</td>
	</tr>
	<tr>
		<td>Skyscraper</td>
		<td>SKY_01</td>
		<td>160x600</td>
		<td>SKY_01</td>
	</tr>
	<tr>
		<td>Small Rectangle 2</td>
		<td>SR_02</td>
		<td>180x150</td>
		<td>SR_02</td>
	</tr>
	<tr>
		<td>Large Rectangle 1</td>
		<td>REC_01</td>
		<td>300x250</td>
		<td>REC_01</td>
	</tr>
	<tr>
		<td>Large Rectangle 2</td>
		<td>REC_02</td>
		<td>300x250</td>
		<td>REC_02</td>
	</tr>
	<tr>
		<td>Footer</td>
		<td>LB_02</td>
		<td>728x90</td>
		<td>LB_02</td>
	</tr>
	<tr>
		<td>Text Sponsorship 1</td>
		<td>NTV_01</td>
		<td>gw txt ads</td>
		<td>TXT1</td>
	</tr>
	<tr>
		<td>Text Sponsorship 2</td>
		<td>NTV_02</td>
		<td>gw txt ads</td>
		<td>TXT2</td>
	</tr>
	<tr>
		<td>Text Sponsorship 3</td>
		<td>NTV_03</td>
		<td>gw txt ads</td>
		<td>TXT3</td>
	</tr>
	<tr>
		<td>Text Sponsorship 4</td>
		<td>NTV_04</td>
		<td>gw txt ads</td>
		<td>TXT4</td>
	</tr>
	<tr>
		<td>Text Sponsorship 5</td>
		<td>NTV_05</td>
		<td>gw txt ads</td>
		<td>TXT5</td>
	</tr>
	<tr>
		<td>Text Sponsorship 6</td>
		<td>NTV_06</td>
		<td>gw txt ads</td>
		<td>TXT6</td>
	</tr>
	<tr>
		<td>Mobile Leaderboard</td>
		<td>MOB_LB_01</td>
		<td>320x50</td>
		<td>MOB_LB_01</td>
	</tr>
</table>
<hr/>
<div className="web-image pa4">
    <img src={image} alt='web naming'/>
</div>


            </div> 
        )
              
    }
}

export default Naming;