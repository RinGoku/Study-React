import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ''
    }
  }
  render() {
    return (
      <section>
        <input type="text" value={this.state.todoInput} onChange={}/>
        <button>追加</button>
      </section>
    )
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li>aaaa</li>
    )
  }  
}

class TodoList extends Component {
  render() {
    return (
      <section>
        <ol>
          <TodoItem />
        </ol>
      </section>
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }
  render() {
    return (

      <div className="App">
            <section>
              <TodoInput />
            </section>
            <section>
              <TodoList />
            </section>
      </div>
    );
  }
}

export default App;
