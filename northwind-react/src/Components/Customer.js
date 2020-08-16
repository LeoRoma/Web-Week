import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

const Customer = ({index, contactName, companyName, contactTitle, address, city, postalCode, country, phone, fax}) => {
    console.log(index)
    return(
            <MDBTableBody> 
            <tr>
                <td>{index}</td>
                <td>{companyName}</td>
                <td>{contactName}</td>                
                <td>{contactTitle}</td>
                <td>{address}</td>
                <td>{city}</td>
                <td>{postalCode}</td>
                <td>{country}</td>
                <td>{phone}</td>
                <td>{fax}</td>              
            </tr>
            </MDBTableBody> 
    )
}

export default Customer;