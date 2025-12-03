import Navbar from "../../Layouts/Navbar";
import React, { useState } from "react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);


function Artists({ data, datacols }) {
    console.log(data);
    const columns = [
        { field: datacols[0], headerName: 'Name' },
        { field: datacols[1], headerName: 'Total Tracks In Library' }
    ]
    const defaultColDef = {
        flex: 1,
    };

    return (
        <>
            <h1>yo</h1>
            <div style={{ height: "400px", width: "100%"  }}>
                <AgGridReact

                    rowData={data}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                />
            </div>
        </>
    );
};

Artists.layout = page => <Navbar children={page} />

export default Artists;