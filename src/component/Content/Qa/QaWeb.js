import React from "react";
import { Button } from "@mui/material";

const QaWeb = ({inputReset}) => {
    return(
    <div>
        <h1 className="centar">Qa Web</h1>
        <table>
            <tbody>
                <tr>
                <td></td>
                <td>Web:</td>
                <td>Checked</td>
                </tr>
            <tr>
                <td>1</td>
                <td>Campaign name</td>
                 <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Priority</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Size</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Custom fields</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Start date - End date - Start-End time</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>6</td>
                <td>Goal (check if this is set on viewable impressions)</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>7</td>
                <td>Deliver impressions (check if this is set on frontloaded)</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>8</td>
                <td>Inventory  - GNWO;GDXO;GPO</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>9</td>
                <td>Position(pos)</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>10</td>
                <td>Subchannel/Channel (optional)</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>11</td>
                <td>Creative name</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>12</td>
                <td>Banner</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>13</td>
                <td>URL</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>14</td>
                <td>Check if URL is working correctly</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr className="reset-qa">
                    <td></td>
                    <td></td>
                    <td className="ma2 center"><Button variant="contained" onClick={inputReset}>reset</Button></td>
                </tr>
            </tbody>
        </table>
    </div>
     
       
    )
}

export default QaWeb;
