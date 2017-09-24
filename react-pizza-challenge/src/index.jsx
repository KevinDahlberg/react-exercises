'use static'

import React, { Component } from 'react';
import Router from 'react-router-dom';
import Layout from './Layout.jsx';
import { render } from 'react-dom';

render (
  <Layout />,
  document.getElementById('container')
)
