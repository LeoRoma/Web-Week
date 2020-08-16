import React, { Component } from 'react';


class CustomerForm extends Component{
    constructor(){
        super()
        this.state={
            customerId: '',
            companyName: '',
            contactName: '',
            contactTitle: '',
            address: '',
            city: '',
            postalCode: '',
            country: '',
            phone: '',
            fax: ''
        }
    };

    handleChange = (event) => {
        let value = event.target.value;

        switch(event.target.name) {
            case 'customerId' :
                this.setState({customerId: value})
                break;
            case 'companyName' :
                this.setState({companyName: value})
                break;
            case 'contactName':
                this.setState({contactName: value})
                break;
            case 'contactTitle':
                this.setState({contactTitle: value})
                break;
            case 'address':
                this.setState({address: value})
                break;
            case 'city':
                this.setState({city: value})
                break;
            case 'postalCode':
                this.setState({postalCode: value})
                break;
            case 'country':
                this.setState({country: value})
                break;
            case 'phone':
                this.setState({phone: value})
                break;
            case 'fax':
                this.setState({fax: value})
                break;
                default:
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = document.querySelector("form");

        let {customerId, companyName, contactName, contactTitle, address, city, postalCode, country, phone, fax} = this.state
        fetch("https://localhost:44320/api/Customers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                customerId: customerId,
                companyName: companyName,
                contactName: contactName,
                contactTitle: contactTitle,
                address: address,
                city: city,
                postalCode: postalCode,
                country: country,
                phone: phone,
                fax: fax
            })
        })
        .then(response => response.json())
        .then(form.reset());
        setTimeout(function () {
            window.location.reload(false);
          }, 500)
    }

    render(){
        console.log(this.state)
        return(
            <div className="addForm">
            <h3>Add A New Customer</h3>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input fluid label="Customer Id" placeholder="Customer Id" name="customerId" onChange={this.handleChange}></input>
                    <input fluid label="Company Name" placeholder="Company Name" name="companyName" onChange={this.handleChange}></input>
                    <input fluid label="Contact Name" placeholder="Contact Name" name="contactName" onChange={this.handleChange}></input>
                    <input fluid label="Contact Title" placeholder="Contact Title" name="contactTitle" onChange={this.handleChange}></input>
                    <input fluid label="Address" placeholder="Address" name="address" onChange={this.handleChange}></input>
                    <input fluid label="City" placeholder="City" name="city" onChange={this.handleChange}></input>
                    <input fluid label="Postal Code" placeholder="Postal Code" name="postalCode" onChange={this.handleChange}></input>
                    <input fluid label="Country" placeholder="Country" name="country" onChange={this.handleChange}></input>
                    <input fluid label="Phone" placeholder="Phone" name="phone" onChange={this.handleChange}></input>
                    <input fluid label="Fax" placeholder="Fax" name="fax" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default CustomerForm;