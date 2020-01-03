import React , {Component} from "react"
import shortid from "shortid"


class Form extends Component{

  state = {
    testo : ""
  }
 
  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.onSubmit({
      testo: this.state.testo,
      completato: false,
      id: shortid.generate()
    })
    this.setState({
      testo: ""
    })
  }

  render(testo){
    return(
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="testo" onChange={this.handleChange} placeholder="contenuto da aggiungere" value={this.state.testo}/>
      <button onClick={this.handleSubmit}>aggiungi</button>
    </form>
    
    )
  }
}

export default Form