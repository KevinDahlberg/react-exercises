import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default CompletedView extends Component {
  render() {
    return (
      <Col xs={12}>
        <CompletedItems
          completedList = {this.props.completedList}
        />
      </Col>
    )
  }
}
