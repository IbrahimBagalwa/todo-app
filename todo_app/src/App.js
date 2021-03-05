import './App.css';
import React, { Component } from 'react';
import Todos from './component/todos/todos.component';


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
        todo.complited =! todo.complited
      }
    })})
  }
  render() {
    // console.log(this.state.todos)
    return (
      <div>
        <h4 style={{textAlign:'center', padding:6, marginBottom:'10px'}}>TODO APP</h4>
        <Todos 
        markcomplited = {this.markcomplited}
        todos = {this.state.todos}
        />
      </div>
    )
  }
}

export default App;
