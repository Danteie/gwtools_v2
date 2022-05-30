import React from "react";

const QaClick= () => {
    return(
    <div>
        <h1 className="centar">Qa Bulletins: Click Tracking
</h1>
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
                <td>Start date - End date - Start-End time</td>
                  <td><input type="checkbox" className="input-qa"/></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Start date - End date - Start-End time</td>
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
            </tbody>
        </table>
    </div>
     
       
    )
}

export default QaClick;
