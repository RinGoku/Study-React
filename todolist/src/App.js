import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoInput extends Component {  
  render() {
    return (
      <section>
        <input type="text" value={this.props.todoInput} 
        onChange={this.props.updateInput}/>
        <button onClick={this.props.clickItem}>追加</button>
      </section>
    )
  }
}

class TodoList extends Component {
  render() {
    const propTodoList = this.props.todoList;
    const todoList = propTodoList.map((todo, index) => {
      return (<li key={index}>
              {todo}
              <button onClick={() => this.props.removeTodo(index)}>×</button>
              </li>);
    });
    return (
      <section>
        <ol>
          {todoList}
        </ol>
      </section>
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todoList: []
    }
  }
  addTodo() {
    const newTodoList = this.state.todoList.slice();
    newTodoList.push(this.state.todoInput);
    this.setState({
      todoList: newTodoList
    });
  }
  removeTodo(i) {
    const newTodoList = this.state.todoList.slice();
    newTodoList.splice(i, 1); 
    this.setState({
      todoList: newTodoList
    });
  }
  updateInput(e) {
    this.setState({todoInput: e.target.value});
  }
  render() {
    return (
      <div className="App">
            <section>
              <TodoInput 
               clickItem={() => this.addTodo()}
               todoInput={this.state.todoInput}
               updateInput={e => this.updateInput(e)}
              />
            </section>
            <section>
              <TodoList 
               todoList={this.state.todoList}
               removeTodo={(i) => this.removeTodo(i)}
              />
            </section>
      </div>
    );
  }
}

export default App;
