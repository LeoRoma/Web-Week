import React, {Component} from 'react';
import MainPage from './Components/MainPage';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      customers: []
    }
  };

  componentDidMount(){
    this.getCustomers();
  }

  getCustomers(){
      fetch("https://localhost:44320/api/Customers")
      .then(response => response.json())
      .then(customersJson => this.setState({customers: customersJson}))
  }

  addCustomer = (customer) => {
    this.setState({customers: [...this.state.customers], customer});
  }

  deleteCustomer = (customerId) => {
    const baseUrl = "https://localhost:44320/api/Customers"
    fetch(`${baseUrl}/${customerId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    setTimeout(function () {
      window.location.reload(false);
    }, 500)
  }

  render(){
    return(
      <div className="App">
        <MainPage 
          customers={this.state.customers} 
          getCustomers={this.getCustomers}
          deleteCustomer={this.deleteCustomer}
        />
      </div>
    )
  }
}

export default App;
