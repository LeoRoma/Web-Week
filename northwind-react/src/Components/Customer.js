import React from 'react';
import CustomerDetails from './CustomerDetails';
import { MDBTableBody } from 'mdbreact';

const Customer = ({index, 
                   contactName, 
                   companyName, 
                   contactTitle, 
                   address, 
                   city, 
                   postalCode, 
                   country, 
                   phone, 
                   fax, 
                   deleteCustomer, 
                   customerId, 
                   handleCustomerDetailsShowChange,
                   customerDetailsIsShown
                }) => {

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
                {/* <button onClick={() => handleCustomerDetailsShowChange()}>Details</button>     */}
                <button onClick={() => deleteCustomer(customerId)}>Delete</button> 
                {/* {customerDetailsIsShown? <CustomerDetails 
                                            companyName={this.companyName}
                                            contactName={this.contactName}
                                            contactTitle={this.contactTitle}
                                            address={this.address}
                                            city={this.city}
                                            postalCode={this.postalCode}
                                            country={this.country}
                                            phone={this.phone}
                                            fax={this.fax}
                                            /> : null}     */}
            </tr>
            </MDBTableBody> 
    )
}

export default Customer;