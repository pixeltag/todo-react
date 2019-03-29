import React, { Component } from 'react'

export default class todo extends Component {
    state = {
        todo : this.props.todo
    };
    render() {
        const todo = this.state.todo;
        const unCompeletedClass = "media"
        const compeletedClass = "media completed-todo"
        return (
            <React.Fragment>
                <li className={ todo.done ? compeletedClass : unCompeletedClass }>
                <input type='checkbox' checked={todo.done} id={todo.id} name={todo.id} onChange={() => this.props.onComplete(todo.id)  } />
                    <label htmlFor={todo.id}>
                        <span></span>
                        {todo.value}
                        <ins><i>{todo.value}</i></ins>
                    </label>
                </li>
            </React.Fragment>
        )
    }
}
