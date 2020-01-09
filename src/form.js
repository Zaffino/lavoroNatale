import React, { Component } from "react"
import shortid from "shortid"

/** 
 * Dal form si può aggiungere un nuovo todo.
 * Il form contiene un input di testo e un bottone per aggiungere il todo.
*/
class Form extends Component {

  /**
   * state imposta un valore testo vuoto che viene usato dall'input di testo
   */
  state = {
    testo: ""
  }
  
  /**
   * handleChange gestisce lo stato del valore di testo
   */
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  /**
   * handleSubmit gestisce il comportamento del form quando clicchiamo sul bottone invio
   */
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.testo.trim() !== '')
      this.props.onSubmit({
        testo: this.state.testo,
        completato: false,
        id: shortid.generate()
      })
    this.setState({
      testo: ""
    })
  }

  render(testo) {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="testo" onChange={this.handleChange} placeholder="contenuto da aggiungere" value={this.state.testo} />
        <button onClick={this.handleSubmit}>aggiungi</button>
      </form>

    )
  }
}

export default Form