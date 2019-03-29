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
                <input type="text" className="new-todo-input" value={this.state.newTodo} onChange={(event) => {this.addNewTodo(event)}} onKeyPress={(event) => {this.addNewTodo(event)}} placeholder="New Todo" />
                <ul>
                    { this.state.todos.map(todo =>    <Todo key={todo.id} todo={todo} onComplete={this.handleComplete} />   ) }
                </ul>
            </div>
        )
    }


    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
    
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
      }


      saveStateToLocalStorage() {
          // save to localStorage
          localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }


    componentDidMount() {
        this.hydrateStateWithLocalStorage();
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
          );
     }

   
    componentWillUnmount() {
        window.removeEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
    
        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
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
                 // update localStorage
                this.saveStateToLocalStorage();
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
                c.done = !c.done;
                return c; 
            }
            return c;
        });
        this.setState({todos});
        this.saveStateToLocalStorage();

    }

    
}
