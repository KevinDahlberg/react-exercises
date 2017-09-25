'use strict'

import React, { Component } from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import { render } from 'react-dom';
import { Nav, NavItem, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to='/' replace>Welcome to Le Pizzaria</NavLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/Home' replace>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to='/Cart' replace>
              <NavItem eventKey={2}>Cart</NavItem>
            </LinkContainer>
            <LinkContainer to='/Checkout' replace>
              <NavItem eventKey={3}>Checkout</NavItem>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
