import React, { Component } from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Menu extends Component {

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              Tony's Pizzeria
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1} href="/">Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/cart">
              <NavItem eventKey={2} href="/cart">Cart</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
