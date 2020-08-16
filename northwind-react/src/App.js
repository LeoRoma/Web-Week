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

  render(){
    return(
      <div className="App">
        <MainPage customers={this.state.customers} />
      </div>
    )
  }
}

export default App;
