import React, { Component } from 'react'
import './todoItem.component.css'
export class TodoItem extends Component {
    render() {
        // console.log(this.props.todo)
        return (
            <div className="props_titre">
                <input className="chkbx" type="checkbox"/>
                <p className="title">{this.props.todo.title}</p>
                <button className="btn">X</button>
            </div>
        )
    }
}

export default TodoItem
