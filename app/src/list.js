import React, { Component } from "react"
import Form from './form.js';
import Todo from './todo.js';

class List extends Component {
    state = {
        todoList: [],
        todoCompletati: 0
    }

    handleElimina = (id) => {
        this.setState({
            todoList: this.state.todoList.filter(todo => todo.id !== id),
            todoCompletati: this.state.todoCompletati - 1
        })
    }

    handleEliminaCompletati = () => {
        this.setState({
            todoList: this.state.todoList.filter(todo => !todo.completato),
            todoCompletati: 0
        })
    }

    handleReset = () => {
        this.setState({
            todoList: [],
            todoCompletati: 0
        })
    }

    addTodo = (todo) => {

        this.state.todoList.push(todo)
        this.setState({
            todoList: [...this.state.todoList]
        })
    }

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