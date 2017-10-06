import React, { Component } from 'react'
import { Col, Table } from 'react-bootstrap'

export default class CartTable extends Component {

  createTableRows = (pizza) => (
    <tr>
      <td>{pizza.size}</td>
      <td>
        <ul>
        {pizza.topping.map((topping) =>
          <li>{topping}</li>
        )}
        </ul>
      </td>
    </tr>
  )

  tableInstance = pizzaArray => (
    <Table striped bordered condensed responsive>
      <thead>
        <tr>
          <th>Size</th>
          <th>Toppings</th>
        </tr>
      </thead>
      <tbody>
        {pizzaArray.map((pizza) =>
          this.createTableRows(pizza)
        )}
      </tbody>
    </Table>
  )

  render() {
    return (
      <Col xs={12}>
        {this.createTableRows(this.props.cart)}
      </Col>
    )
  }
