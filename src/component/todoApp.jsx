import React, { Component } from 'react';
import Todo from './todo'

export default class todoApp extends Component {

    state = {
        todos : [ ],
        newTodo :  {id : Number , title : '' , selected : Boolean, done : Boolean }
    };
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Todo</h6>
                <input type="text" value={this.state.newTodo.title} onChange={(event) => {this.addNewTodo(event)}} onKeyPress={(event) => {this.addNewTodo(event)}} placeholder="Enter New Todo" />
                { this.state.todos.map(todo =>    <Todo key={todo.id} todo={todo} />   ) }
            </div>
        )
    }

    addNewTodo = (e) => {
        if(e.key === 'Enter') {
            this.setState({todos : this.state.todos.concat({id : Number(new Date()), title : e.target.value , selected : false, done : false })})
            this.setState({newTodo  : {id : Number(new Date()) , title : '' , selected : false, done : false }})
            console.log(this.state.todos);
        } else {
            this.setState({newTodo : {id : Number(new Date()) , title : e.target.value , selected : false, done : false }})
        }
    }
}
