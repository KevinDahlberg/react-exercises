import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'

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
      <Col xs={6}>
        <h1>Awesome To Do List</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.item} onChange={this.handleChange}/>
        <Button type="submit">Submit</Button>
        </form>
      </Col>
    )
  }
}
