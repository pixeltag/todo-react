import React, { Component } from 'react'

export default class todo extends Component {
    state = {
        todo: this.props.todo,
        editing: this.props.todo.value
    };
    render() {
        const todo = this.state.todo;
        const unCompeletedClass = "media"
        const compeletedClass = "media completed-todo"
        let todoContainer
        if (!todo.selected) {
            todoContainer = <div>{todo.value}</div>
        } else {
            todoContainer = <div>
                <input type="text" className="form-control todo-edit" onChange={(event) => this.onHandleEdit(event)} value={this.state.editing} onKeyPress={(event) => { this.props.onSave(event , todo.id) }} />
            </div>;
        }

        return (
            <React.Fragment>
                <li className={todo.done ? compeletedClass : unCompeletedClass} onDoubleClick={() => this.props.onEdit(todo.id)}>
                    <span>
                        <input type='checkbox' checked={todo.done} id={todo.id} name={todo.id} onChange={() => this.props.onComplete(todo.id)} />
                        <label htmlFor={todo.id}>
                            <span></span>
                            {todoContainer}
                        </label>
                    </span>


                    <button className="btn delete-todo" onClick={() => this.props.onDelete(todo.id)}>x</button>
                </li>
            </React.Fragment>
        )
    }

    onHandleEdit = (event) => {
        this.setState({ editing: event.target.value })
    }
}
