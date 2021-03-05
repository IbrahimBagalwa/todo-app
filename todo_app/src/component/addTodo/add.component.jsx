import React, { Component } from 'react'
import './add.component.css'
export class AddTodo extends Component {

    state = {
        title:''
    }
    onSubmit = (e)=>{
        e.preventDefault()
        this.props.addTodos(this.state.title)
    }
    onChange = (e)=>this.setState({[e.target.name]: e.target.value})
    render() {
        // console.log(this.state.title)
        return (
            <form className="input_text"
                onSubmit={this.onSubmit}
            >
            
               <input 
               className='input'
               name="title" 
               type='text' 
               placeholder='add to do' 
               value = {this.state.value}
               onChange = {this.onChange}
               /> 
               
               <input className='btnadd' type='submit' value="Add to do"/>
            </form>
        )
    }
}

export default AddTodo
