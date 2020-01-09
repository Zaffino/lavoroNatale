import React, { Component } from "react"
import Form from './form.js';
import Todo from './todo.js';

/**
 * List gestisce la lista di todo
 */
class List extends Component {
    /**
     * state all'inizio imposta la todoList vuota.
     * todoCompletati serve a sapere se i bottoni di eliminazione per i todo devono essere attivi o inattivi
     */
    state = {
        todoList: [],
        todoCompletati: 0
    }
    /**
     * gestisce l'eliminazione di un solo todo dalla lista
     */
    handleElimina = (id) => {
        this.setState({
            todoList: this.state.todoList.filter(todo => todo.id !== id),
            todoCompletati: this.state.todoCompletati - 1
        })
    }

    /**
     * gestisce l'eliminazione dei todo completati dalla lista
     */
    handleEliminaCompletati = () => {
        this.setState({
            todoList: this.state.todoList.filter(todo => !todo.completato),
            todoCompletati: 0
        })
    }

    /**
     * gestisce l'eliminazione di tutti i todo dalla lista
     */
    handleReset = () => {
        this.setState({
            todoList: [],
            todoCompletati: 0
        })
    }

    /**
     * gestisce l'aggiunta di un todo alla lista
     */
    addTodo = (todo) => {

        this.state.todoList.push(todo)
        this.setState({
            todoList: [...this.state.todoList]
        })
    }

    /**
     * gestisce se un todo è completato o no
     */
    toggleComplete = (id) => {
        this.setState({
            todoList: this.state.todoList.map(todo => {
                if (todo.id === id) {
                    if (todo.completato === false)
                        this.setState({ todoCompletati: this.state.todoCompletati + 1 })
                    else
                        this.setState({ todoCompletati: this.state.todoCompletati - 1 })
                    if (this.state.todoCompletati >= 1)
                        this.eliminaCompletati = false
                    return {
                        ...todo,
                        completato: !todo.completato
                    }
                }
                else {
                    return todo;
                }
            })
        })
    }


    render() {
        return (<div>
            <Form onSubmit={this.addTodo} />
            <div>

                {
                    this.state.todoCompletati > 0 ?
                        <button onClick={this.handleEliminaCompletati}>Elimina completi</button>
                        :
                        <button disabled onClick={this.handleEliminaCompletati}>Elimina completi</button>
                }

                {
                    this.state.todoList.length > 0 ?
                        <button onClick={this.handleReset}>Elimina tutto</button>
                        :
                        <button disabled onClick={this.handleReset}>Elimina tutto</button>
                }


            </div>
            {
                this.state.todoList.map(todo =>
                    (<Todo key={todo.id} seEliminato={() => this.handleElimina(todo.id)} toggleComplete={() => this.toggleComplete(todo.id)} todo={todo} />))
            }

        </div>
        )
    }
}


export default List