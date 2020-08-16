import React from 'react';
import Customer from './Customer';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

const DisplayCustomers = ({customers}) => {
    console.log(customers)
    return(
        <div>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Fax</th>
                    </tr>
                </MDBTableHead>
                    {customers.map((customer, index) => 
                        <Customer 
                            index={index}
                            customerName={customer.customerName}
                            contactName={customer.contactName}
                            companyName={customer.companyName}
                            contactTitle={customer.contactTitle}
                            address={customer.address}
                            city={customer.city}
                            postalCode={customer.postalCode}
                            country={customer.country}
                            phone={customer.phone}
                            fax={customer.fax}
                        />
                    )}
              </MDBTable>
        </div>
    )
};

export default DisplayCustomers;