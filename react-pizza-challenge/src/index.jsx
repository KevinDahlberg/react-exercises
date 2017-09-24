'use static'

@import '~normalize.css';
@import '~bootstrap'

import React, { Component } from 'react';
import Router from 'react-router-dom';
import Routes from './routes.jsx';
import { render } from 'react-dom';

render (
  <Routes />,
  document.getElementById('container')
)
