import React, { Component } from 'react'
import TodoApp from './component/todoApp'

export default class App extends Component {
  render() {
    return (
      <div>
          <main role="main" className="container">
                <TodoApp />
            </main>
      </div>
    )
  }
}
