import React from "react";
import { Button } from "@mui/material";

const QaClick= ({inputReset}) => {
    return(
        <div>
            <h1 className="centar">Qa Bulletins: Click Tracking</h1>
            <table>
                <tbody>
                    <tr>
                    <td></td>
                    <td>Bulletins: Click Tracking</td>
                    <td>Checked</td>
                    </tr>
                <tr>
                    <td>1</td>
                    <td>Campaign name</td>
                    <td><input type="checkbox" className="input-qa"/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Type of line item(clck-tracking only)</td>
                    <td><input type="checkbox" className="input-qa"/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Custom fields</td>
                    <td><input type="checkbox" className="input-qa"/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Start date - Start-End time immediately</td>
                    <td><input type="checkbox" className="input-qa"/></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>End date - Start-End time</td>
                    <td><input type="checkbox" className="input-qa"/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Inventory/Ad unit</td>
                    <td><input type="checkbox" className="input-qa"/></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Creative Name</td>
                    <td><input type="checkbox" className="input-qa"/></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Creative - URL</td>
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

export default QaClick;
