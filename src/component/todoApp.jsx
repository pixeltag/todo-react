import React, { Component } from 'react';
import Todo from './todo'

export default class todoApp extends Component {

    state = {
        todos : [],
        newTodo : ''
    };
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Todo</h6>
                <input type="text" className="form-control form-control-lg" value={this.state.newTodo} onChange={(event) => {this.addNewTodo(event)}} onKeyPress={(event) => {this.addNewTodo(event)}} placeholder="Enter New Todo" />
                { this.state.todos.map(todo =>    <Todo key={todo.id} todo={todo} onComplete={this.handleComplete} />   ) }
            </div>
        )
    }

    // add new Todo
    addNewTodo = (e) => {
        // when Enter add new todo
        if(e.key === 'Enter') {
            if(e.target.value !== '') {
                const newTodo = {
                    id: Number(new Date()),
                    value: this.state.newTodo.slice(),
                    selected : false,
                    done : false
                  };
    
                const todos = [...this.state.todos];
                todos.push(newTodo);
                this.setState({todos , newTodo : ''})
                
            }
        } else {
            // handling on Change
            this.setState({ newTodo : e.target.value})
        }
    }

    // mark todo as Done
    
    handleComplete = (todo) => {
        let todos = this.state.todos.map( c => {
            if(c.id === todo) {
                c.done = true;
                return c; 
            }
            return c;
        });
        this.setState({todos});
    }

    
}
