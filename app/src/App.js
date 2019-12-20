import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends Component{
  render(){
    return(
      <header className="App-header">
          <h1>ok boomer</h1>
      </header>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
