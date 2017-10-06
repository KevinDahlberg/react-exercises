import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import CartTable from '../components/Cart/CartTable'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
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

const mapStateToProps = (state) => (
  {
  cart: state.cartReducer.cart
  }
)

export default connect(mapStateToProps)(Cart)
