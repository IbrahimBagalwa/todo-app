import React, { Component } from 'react'
import TodoItem from '../todoItem/todoItem.component'

export class Todos extends Component {
    render() {

        return this.props.todos.map((todo)=>(
        <TodoItem 
            key={todo.id} 
            todo={todo}
            markcomplited = {this.props.markcomplited}
            delTodo = {this.props.delTodo}
        />
        )
           
    )
        }
}

export default Todos
