import React, {Component} from 'react';
import Navbar from './Navbar';
import DisplayCustomers from './DisplayCustomers';

class MainPage extends Component {


    render() {
        return(
            <div>
                <Navbar />
                <DisplayCustomers customers={this.props.customers}/>
            </div>    
        )
    } 
};

export default MainPage;

