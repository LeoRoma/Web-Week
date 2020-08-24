import React, {Component} from 'react';
import Navbar from './Navbar';
import DisplayCustomers from './DisplayCustomers';
import CustomerForm from './CustomerForm';
import AddButton from './AddButton';

class MainPage extends Component {
    constructor(){
        super()
        this.state={
            customerFormIsShown: false,
            customerDetailsIsShown:false
        }
    }

    handleShowChange = () => {
        this.setState({
            customerFormIsShown: !this.state.customerFormIsShown
        })
    }

    handleCustomerDetailsShowChange = () => {
        this.setState({
            customerDetailsIsShown: !this.state.customerDetailsIsShown
        })
    }

    render() {
        console.log(this.state.customerDetailsIsShown)
        return(
            <div>
                <Navbar />
                <AddButton handleShowChange={this.handleShowChange} />

                {this.state.customerFormIsShown? <CustomerForm /> : null}
                <DisplayCustomers 
                    customers={this.props.customers}
                    deleteCustomer={this.props.deleteCustomer}
                    handleCustomerDetailsShowChange={this.handleCustomerDetailsShowChange}
                    customerDetailsIsShown={this.state.customerDetailsIsShown}
                />
            </div>    
        )
    } 
};

export default MainPage;

