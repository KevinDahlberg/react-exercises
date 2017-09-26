'use static'

import React, { Component } from 'react'
import render from 'react-dom'
import { Grid, Row, Col, Button, FormGroup } from 'react-bootstrap'

import PizzaDropdown from './PizzaSizes.jsx'
import ToppingDropdown from './PizzaToppings.jsx'

export default class OrderPizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      toppings: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'toppings') {
      this.setState(
        {toppings: [...this.state.toppings, value]}
      )
    } else {
    this.setState({[name]: value});
    }
  }

  handleSubmit(event) {
    alert('Pizza Added to Order! Size: ' + this.state.size + ' Toppings: ' + this.state.toppings);
    event.preventDefault();
  }

  render() {
    return (
      <Grid>
        <Row>
          <h2>Choose Your Pizza</h2>
        </Row>
        <Row>
          <form onSubmit={this.handleSubmit}>
              <select
                name="size"
                defaultValue={this.state.size}
                onChange={this.handleChange}>
                  <option value=''>Choose Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
              </select>
              <select
                name="toppings"
                onChange={this.handleChange}>
                  <option value=''>Choose Toppings</option>
                  <option value='Pepperoni'>Pepperoni</option>
                  <option value='Sausage'>Sausage</option>
                  <option value='Canadian Bacon'>Canadian Bacon</option>
              </select>
            <input type='submit' value='submit' />
          </form>
        </Row>
        <Row>
        <table>
          <thead>
            <tr>
            <th>Size</th>
            <th>Toppings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.size}</td>
              <td>{this.state.toppings}</td>
            </tr>
          </tbody>
        </table>
        </Row>
      </Grid>


    )
  }
}
