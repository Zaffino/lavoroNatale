import React, { Component } from 'react';
import TextArea from './addText.js';
import './App.css';
import ButtonAdd from './buttonAdd.js';
import ButtonDel from './buttonDel.js';
import List from './list.js';

/*
la todo list necessita di:
bottoni -> aggiungi, togli
div -> dove c'è il todo list 
textArea -> dove aggiungo elementi al todo list

*/

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
      <TextArea/>
      <ButtonAdd/>
      <ButtonDel/>
      <List/>
    </div>
  );
}

export default App;
