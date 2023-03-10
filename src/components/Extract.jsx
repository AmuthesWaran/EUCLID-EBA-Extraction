import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import jsonData from '../server/CreditInstitutionsRegister.json'
import { FormControlLabel, Switch } from '@mui/material';

const Extract = () => {

    console.log(jsonData)
    const data = jsonData.data

    const [mode, setMode] = useState('dark')

    function switchMode(e) {
        // console.log(e.target.checked)
        if (!e.target.checked) {
            setMode('light')
        }
        else {
            setMode('dark')
        }
    }

    // console.log(data);

    // const loadData = () => {

    // let url = `http://localhost:3000/data`;

    // axios.get(url)
    //      .then(response=> setData(response.data) )
    //      .catch(error=>console.log(error))  

    // axios.get(`https://euclid.eba.europa.eu/register/api/search/entities?t=1665061336642`)
    //      .then(response => console.log(response))
    //      .catch(error => console.log(error))


    // }

    // response.data[0]._payload.Properties

    return (
        <div>

            {/* <Button variant="primary" onClick={loadData}>Click here</Button> */}

            <FormControlLabel
                value="start"
                control={
                    <Switch

                        defaultChecked
                        onChange={switchMode}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Dark Mode"
                labelPlacement="start"
            />
            <br />

            <Table striped bordered hover variant={mode}>
                {/* <table border="1"> */}
                <thead>
                    <tr>
                        {/* <th>S.No</th> */}
                        <th>Entity Code</th>
                        <th>Code Type</th>
                        <th>Name</th>
                        <th>Non Latin Name</th>
                        <th>National ID</th>
                        <th>Country</th>
                        <th>Town</th>
                        <th>EEA_DEP_GUA_SCH</th>
                        <th>COM_AUT</th>
                        <th>ENT_AUT</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => (
                            <tr key={d._payload.Properties.map(p => p.ENT_COD)}>
                                {/* <td>{d._payload.Properties}</td> */}
                                <td>{d._payload.Properties.map(p => p.ENT_COD)}</td>
                                <td>{d._payload.Properties.map(p => p.ENT_COD_TYP)}</td>
                                <td>{d._payload.Properties.map(p => p.ENT_NAM)}</td>
                                <td>{d._payload.Properties.map(p => p.ENT_NAM_NON_LAT)}</td>
                                <td>{d._payload.Properties.map(p => p.ENT_NAT_REF_COD)}</td>
                                <td>{d._payload.Properties.map(p => p.ENT_COU_RES)}</td>
                                <td>{d._payload.Properties.map(p => p.ENT_TOW_CIT_RES)}</td>

                                <td>{d._payload.Properties.map(p => p.EEA_DEP_GUA_SCH)}</td>
                                <td>{d._payload.Properties.map(p => p.COM_AUT)}</td>
                                <td>{d._payload.Properties.map(p => p.ENT_AUT)}</td>

                            </tr>
                        ))
                    }
                </tbody>
                {/* </table> */}
            </Table>





        </div>
    )
}

export default Extract