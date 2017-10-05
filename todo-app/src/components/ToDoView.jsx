import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class ToDoView extends Component {
  render() {
    return (
      <Col xs={12}>
        <ItemsToDo
          onItemClick = {this.props.itemClick}
          todoList = {this.props.todoList}
        />
      </Col>
    )
  }
}
