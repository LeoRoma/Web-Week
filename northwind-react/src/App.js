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
    this.GetCustomers();
  }

  GetCustomers(){
      fetch("https://localhost:44320/api/Customers")
      .then(response => response.json())
      .then(customersJson => this.setState({customers: customersJson}))
  }

  addCustomer= (customer) => {
    this.setState({customers: [...this.state.customers], customer});
  }
  render(){
    return(
      <div className="App">
        <MainPage 
          customers={this.state.customers} 
          addCustomer={this.addCustomer}
        />
      </div>
    )
  }
}

export default App;
