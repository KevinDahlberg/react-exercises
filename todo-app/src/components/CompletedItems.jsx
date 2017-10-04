import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class CompletedItems extends Component {
  render() {
    return (
      <Col xs={6}>
        <h2>Completed Items</h2>
        <ul>
          {this.props.completedList.map((item, idx) =>
            <li key={idx}>{item}</li>
          )}
        </ul>
      </Col>
    )
  }
}
