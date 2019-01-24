import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class TodoInput extends Component {  
  render() {
    return (
      <section className="row">
      <section className="col-sm-8">
        <FormControl  type="text" value={this.props.todoInput} 
        onChange={this.props.updateInput}/>
      </section>
      <section className="col-sm-4">
        <Button className="btn-success add-btn" 
         onClick={this.props.clickItem}>追加</Button>
      </section>
      </section>
    )
  }
}

class TodoList extends Component {
  render() {
    const propTodoList = this.props.todoList;
    const todoList = propTodoList.map((todo, index) => {
      return (<li className="todo-item row justify-content-between" key={index}>
              <span>{todo}</span>
              <Button className="btn-danger" 
              onClick={() => this.props.removeTodo(index)}>×</Button>
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
         <section className="container">
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
          </section>
      </div>
    );
  }
}

export default App;
