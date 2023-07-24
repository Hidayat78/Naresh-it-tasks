export function GridComponent(props) {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {
                            props.fields.map((field) =>
                                <th>{field}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item) =>
                            <tr>
                                {
                                    Object.keys(item).map((key) =>
                                        <td>{item[key]}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


ProductsCatalog.js

import React from "react";
import { GridComponent } from "../CustomComponents/GridComponent";


export class ProductsCatalog extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>Products Grid</h2>
                <GridComponent fields={['Name', 'Price', 'Stock']} data={[{ Name: 'TV', Price: 45000.33, Stock: 'true' }, { Name: 'Mobile', Price: 56000.33, Stock: 'true' }]} />
                <h2>Employee Grid</h2>
                <GridComponent fields={['First Name', 'Last Name', 'Designation']} data={[{ FirstName: 'Kiran', LastName: 'Kumar', Designation: 'Manager' }]} />
                <h2>Students Grid</h2>
                <GridComponent fields={['ID', 'Name', 'Course']} data={[{ Id: 101, Name: 'Raj', Course: 'React' }]} />
            </div>
        )
    }
}
