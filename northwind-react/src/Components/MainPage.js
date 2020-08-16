import React, {Component} from 'react';
import Navbar from './Navbar';
import DisplayCustomers from './DisplayCustomers';
import CustomerForm from './CustomerForm';

class MainPage extends Component {
    constructor(){
        super()
        this.state={
            addNewCustomerPageIsShown: false
        }
    }

    handleShowChange = () => {
        this.setState({
            addNewCustomerPageIsShown: !this.state.addNewCustomerPageIsShown
        })
    }

    render() {
        return(
            <div>
                <Navbar />
                <button onClick={() => this.handleShowChange()}>Add new Customer</button>
                {this.state.addNewCustomerPageIsShown? <CustomerForm /> : null}
                <DisplayCustomers 
                    customers={this.props.customers}
                    deleteCustomer={this.props.deleteCustomer}
                />
            </div>    
        )
    } 
};

export default MainPage;

