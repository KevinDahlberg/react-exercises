'use strict';

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//components
import Header from './components/Header.jsx'
import Routes from './routes.jsx'
import Footer from './components/Footer.jsx'


const Layout = () => (
  <div>
    <Header />
    <Routes />
    <Footer />
  </div>
);

module.exports = Layout;
