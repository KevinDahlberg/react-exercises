'use strict'

import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <p className="text-muted">Copyright 2017 OnePointOh Consulting</p>
        </div>
      </footer>
    )
  }

}
