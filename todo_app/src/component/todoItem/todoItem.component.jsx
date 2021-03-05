import React, { Component } from 'react'
import './todoItem.component.css'
export class TodoItem extends Component {
    getstyle = ()=>{
        
        return{
            textDecoration: this.props.todo.complited ? 'line-through' : 'none'
        }
    }
   
    render() { 
        const {id, title} = this.props.todo;
        return (
            <div className="props_titre" style={this.getstyle()}>
                <input onChange={this.props.markcomplited.bind(this,id)} className="chkbx" type="checkbox"/>
                <p className="title">{title}</p>
                <button className="btn" onClick={this.props.delTodo.bind(this,id)}>X</button>
            </div>
        )
    }
}

export default TodoItem
