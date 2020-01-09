import React, { Component } from 'react';

import './App.css';
import List from './list.js';

class Header extends Component{
  render(){
    return(
      <header>
          <h1>TODO List</h1>
      </header>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Header/>
      
      <List/>
    </div>
  );
}

export default App;
