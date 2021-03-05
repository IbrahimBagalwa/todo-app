import './App.css';
import React, { Component } from 'react';
import Todos from './component/todos/todos.component';
import AddTodo from './component/addTodo/add.component';
import axios from 'axios'

export class App extends Component {
  componentDidMount(){
    axios.get('/todos')
    .then(res=>this.setState({todos: res.data}))
    .catch(err=>console.log(err))
  }
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }
  markcomplited = (id)=>{
    // this.setState({todos:this.state.todos.map(todo=>{
    //   if(todo.id === id){
    //     todo.complited = !todo.complited
    //   }
    //   return todo
    // })})
    axios.put(`/todos/${id}`)
    .then(res=>this.setState({todos:this.state.todos.map(todo=>{if(todo.id === id){todo.complited = !todo.complited}return todo})}))
    .catch(err=>console.log(err))
  }
  delTodo = (id)=>{
    // this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]})
    axios.delete(`/todos/${id}`)
    .then(res=>this.setState({todos:[...this.state.filter(todo=>todo.id != id)]}))
    .catch(err=>console.log(err))
  }
  addTodos = (title)=>{
    // const new_todos = {
    //   id: this.state.todos.length +1,
    //   title:title,
    //   complited:false
    // }
    // this.setState({todos:[...this.state.todos, new_todos]})
    axios.post('/todos',{
      title,
      complited:false
    })
    .then(res =>this.setState({todos:[...this.state.todos, res.data]}))
    .catch(err=>console.log(err))
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
