import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from "./components/counters";

class App extends Component {
  
  state = {  
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
    ]

};




handleIncriment = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({ counters});
  };

  handleReset = () => {

  };


handleDelete = counterId => {
  
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters});
  
};

  render() { 
    return (
     
      <React.Fragment>
      <NavBar />
      <main className="container">
      <Counters  

      counters={this.state.counters}
      onReset={this.handleReset} 
      onIncrement={this.handleIncriment} 
      onDelete={this.handleDelete}
      />
      </main>


      </React.Fragment>
      

     );
  }
}
 
export default App;


//test