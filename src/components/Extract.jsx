import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const Extract = () => {
  
    const [data, setData] = useState([])
    console.log(data);

    const loadData = () => {

        let url = `http://localhost:3000/data`;

        axios.get(url)
             .then(response=> setData(response.data) )
             .catch(error=>console.log(error))  

             


        axios.get(`https://euclid.eba.europa.eu/register/api/search/entities?t=1665061336642`)
             .then(response => console.log(response))
             .catch(error => console.log(error))
    }

    // response.data[0]._payload.Properties

    return (
    <div>

    <Button variant="primary" onClick={loadData}>Click here</Button>
    <Table striped bordered hover>
        {/* <table border="1"> */}
            <thead>
                <tr>
                    {/* <th>S.No</th> */}
                    <th>LEI</th>
                    <th>Name</th>
                    <th>National ID</th>
                    <th>Country</th>
                    <th>Town</th>
                </tr>
            </thead>
            <tbody>
        {
            data.map(d => (
                <tr key={d._payload.Properties.map(p => p.ENT_COD)}>
                    {/* <td>{d._payload.Properties}</td> */}
                    <td>{d._payload.Properties.map(p => p.ENT_COD)}</td>
                    <td>{d._payload.Properties.map(p => p.ENT_NAM)}</td>
                    <td>{d._payload.Properties.map(p => p.ENT_NAT_REF_COD)}</td>
                    <td>{d._payload.Properties.map(p => p.ENT_COU_RES)}</td>
                    <td>{d._payload.Properties.map(p => p.ENT_TOW_CIT_RES)}</td>
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