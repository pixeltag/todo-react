import React, { Component } from 'react'

export default class todo extends Component {
    state = {
        todo : this.props.todo
    };
    render() {
        const todo = this.state.todo;
        const unCompeletedClass = "media text-muted pt-3"
        const compeletedClass = "media text-muted pt-3 completed-todo"
        return (
            <React.Fragment>
                <div className={ todo.done ? compeletedClass : unCompeletedClass }>
                    <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <h6 className="media-body">
                        {todo.value}
                    </h6>
                    <button className="btn btn-default" onClick={() => this.props.onComplete(todo.id)  }>Complete</button>
                </div>
            </React.Fragment>
        )
    }
}
