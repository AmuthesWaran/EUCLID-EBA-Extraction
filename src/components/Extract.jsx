import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import jsonData from '../server/CreditInstitutionsRegister.json'
import { FormControlLabel, Switch } from '@mui/material';
import { CSVLink } from 'react-csv';
import { Button } from 'react-bootstrap';

const Extract = () => {


    const headers = [

        { label: "Entity Code", key: "_payload.Properties[0].ENT_COD" },
        { label: "Code Type", key: "_payload.Properties[0].ENT_COD_TYP" },
        { label: "Name", key: "_payload.Properties[0].ENT_NAM" },
        { label: "Non Latin Name", key: "_payload.Properties[0].ENT_NAM_NON_LAT" },
        { label: "National ID", key: "_payload.Properties[0].ENT_NAT_REF_COD" },
        { label: "Country", key: "_payload.Properties[0].ENT_COU_RES" },
        { label: "Town", key: "_payload.Properties[0].ENT_TOW_CIT_RES" },
        { label: "EEA_DEP_GUA_SCH", key: "_payload.Properties[0].EEA_DEP_GUA_SCH" },
        { label: "COM_AUT", key: "_payload.Properties[0].COM_AUT" },
        { label: "ENT_AUT", key: "_payload.Properties[0].ENT_AUT[0]" },


    ]


    const data = jsonData.data
    // console.log(jsonData)
    // console.log(jsonData.data)

    const downloadAsCsv = {
        'data': data,
        'headers': headers,
        'filename': 'Recent Transactions.csv'
    }

    const [mode, setMode] = useState('dark')

    // Function for dark mode
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
            <Button>
                <CSVLink style={{ textDecoration: 'none', color: 'white' }} {...downloadAsCsv} >Export as CSV</CSVLink>
            </Button>

            <Table striped bordered hover variant={mode}>
                <thead>
                    <tr>
                        <th>S.No</th>
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
                        data.map((d, index) => (

                            <tr key={d._payload.Properties.map(p => p.ENT_COD)}>
                                {/* <td>{d._payload.Properties}</td> */}
                                <td>{index + 1}</td>
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
            </Table>





        </div>
    )
}

export default Extract