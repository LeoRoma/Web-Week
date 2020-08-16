import React from 'react';
import { MDBTableBody } from 'mdbreact';

const Customer = ({index, contactName, companyName, contactTitle, address, city, postalCode, country, phone, fax, deleteCustomer, customerId}) => {

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
                <button onClick={() => deleteCustomer(customerId)}>Delete</button>             
            </tr>
            </MDBTableBody> 
    )
}

export default Customer;