import React from 'react'
import DataTable from 'react-data-table-component';
import jsonData from '../server/CreditInstitutionsRegister.json'

const DataTableReact = () => {

    console.log(jsonData.data)

    const data = jsonData.data

    // const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, [])

    const columns = [
        {
            name: 'Entity Code',
            selector: row => row._payload.Properties.map(prop => prop.ENT_COD),
            sortable: true,
        },
        {
            name: 'Code Type',
            selector: row => row._payload.Properties.map(prop => prop.ENT_COD_TYP),
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row._payload.Properties.map(prop => prop.ENT_NAM),
            sortable: true,
        },
        {
            name: 'Non Latin Name',
            selector: row => row._payload.Properties.map(prop => prop.ENT_TOW_CIT_RES_NON_LAT),
            sortable: true,
        },
        {
            name: 'National ID',
            selector: row => row._payload.Properties.map(prop => prop.ENT_NAT_REF_COD),
            sortable: true,
        },
        {
            name: 'Country',
            selector: row => row._payload.Properties.map(prop => prop.ENT_COU_RES),
            sortable: true,
        },
        {
            name: 'Town',
            selector: row => row._payload.Properties.map(prop => prop.ENT_TOW_CIT_RES),
            sortable: true,
        },
        {
            name: 'EEA_DEP_GUA_SCH',
            selector: row => row._payload.Properties.map(prop => prop.EEA_DEP_GUA_SCH),
            sortable: true,
        },
        {
            name: 'COM_AUT',
            selector: row => row._payload.Properties.map(prop => prop.COM_AUT),
            sortable: true,
        },
        {
            name: 'ENT_AUT',
            selector: row => row._payload.Properties.map(prop => prop.ENT_AUT),
            sortable: true,
        },

    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                highlightOnHover
                pointerOnHover
                selectableRowsHighlight

            />
        </div>

    )
}

export default DataTableReact