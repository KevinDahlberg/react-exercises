import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    this.props.onHandleSubmit(e)
  }

  handleChange(e) {
    this.props.onHandleChange(e)
  }

  render() {
    return (
      <div>
        <h1>Awesome To Do List</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.item} onChange={this.handleChange}/>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
