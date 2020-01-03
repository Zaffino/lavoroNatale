import React, { Component } from "react"
import Form from './form.js';
import Todo from './todo.js';

class List extends Component {

    state={
        todoList: []
    }

    addTodo = (todo) =>{
        
        this.state.todoList.push(todo)
        this.setState({
            todoList: [...this.state.todoList]
        })
    }

    toggleComplete = (id) =>{
        this.setState({
            todoList: this.state.todoList.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else{
                    return todo;
                }
            })
        })
    }


    render() {
        return (<div>
            <Form onSubmit={this.addTodo} />
        {
            this.state.todoList.map(todo => 
                (<Todo key={todo.id}  testo={todo.testo}/>))
        }
        </div>)
    }
}


export default List