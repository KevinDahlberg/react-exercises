import React, { Component } from 'react'
import { Col, Table } from 'react-bootstrap'

export default class CartTable extends Component {

  createTableRows = (pizza, idx) => (
    <tr key={idx}>
      <td>{pizza.size}</td>
      <td>
        <ul>
          {this.createToppingList(pizza.toppings)}
        </ul>
      </td>
    </tr>
  )

  createToppingList = toppingArray => (
    toppingArray.map((topping, idx) =>
      <li key={idx}>{topping}</li>
    )
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
        {pizzaArray.map((pizza, idx) =>
          this.createTableRows(pizza, idx)
        )}
      </tbody>
    </Table>
  )

  render() {
    return (
      <Col xs={12}>
        {this.tableInstance(this.props.cart)}
      </Col>
    )
  }
}
