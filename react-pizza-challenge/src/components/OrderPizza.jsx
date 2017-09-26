'use static'

import React, { Component } from 'react'
import render from 'react-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap'

import PizzaDropdown from './PizzaSizes.jsx'
import ToppingDropdown from './PizzaToppings.jsx'

export default class OrderPizza extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <h2>Choose Your Pizza</h2>
        </Row>
        <Row>
          <Col sm={4}>
            <PizzaDropdown />
          </Col>
          <Col sm={4}>
            <ToppingDropdown />
          </Col>
          <Col sm={4}>
            <Button>Order Pizza</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
