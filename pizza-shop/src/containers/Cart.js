import React, { Component } from 'react'
import { Grid, Col, Table } from 'react-bootstrap'

import CartTable from '../components/Cart/CartTable'

export default class Cart extends Component {

  render() {
    const { cart } = this.props
    return (
      <Grid>
        <h1>Cart</h1>
        <Col xs={12}>
          <CartTable cart={this.props.cart} />
        </Col>
      </Grid>
    )
  }
}
