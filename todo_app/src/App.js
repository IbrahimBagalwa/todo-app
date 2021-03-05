import './App.css';
import React, { Component } from 'react';
import Todos from './component/todos/todos.component';
import AddTodo from './component/addTodo/add.component';


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[
        {
          id:1,
          title:"ca doit marcher",
          complited:false
        },
        {
          id:2,
          title:"ca doit marcher",
          complited:false
        },
        {
          id:3,
          title:"ca doit marcher",
          complited:false
        }
      ]
    }
  }
  markcomplited = (id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.complited = !todo.complited
      }
      return todo
    })})
  }
  delTodo = (id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]})
  }
  addTodos = (title)=>{
    const new_todos = {
      id: this.state.todos.length +1,
      title:title,
      complited:false
    }
    this.setState({todos:[...this.state.todos, new_todos]})
  }
  render() {
    // console.log(this.markcomplited.id)
    return (
      <div>
        <h4 style={{textAlign:'center', padding:6, marginBottom:'10px'}}>TODO APP</h4>
        <div className="AddTodo">
          <AddTodo addTodos={this.addTodos}/>
        </div> 
        <Todos 
        todos = {this.state.todos}
        markcomplited = {this.markcomplited}
        delTodo = {this.delTodo}
        />
      </div>
    )
  }
}

export default App;
