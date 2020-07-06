import React from 'react';
import {v4 as uuid} from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todo = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo
    };
  };

  addItem = itemName =>{
    const newItem = {
      task: itemName,
      id: uuid(),
      completed: false,
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  toggleItem = itemId =>{
    this.setState({
      todo: this.state.todo.map(item =>{
        if (item.id === itemId) {
          return{
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Honey Do List</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList toggleItem={this.toggleItem} todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
