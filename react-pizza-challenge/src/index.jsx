'use static'

import React, { Component } from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import { render } from 'react-dom';
import { Nav, NavItem, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Layout from './Layout.jsx';

render ((
  <HashRouter>
    <Layout />
  </HashRouter>
),
  document.getElementById('container')
)
