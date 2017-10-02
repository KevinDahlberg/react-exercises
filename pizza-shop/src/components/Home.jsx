import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Home extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>Welcome to Tony's Pizzeria!</h1>
              <p>
                Treat yourself to the best pizza in town!
              </p>

              <p>
                <LinkContainer to="/order">
                  <Button bsStyle="primary"
                    to="/order">Order Pizza
                  </Button>
                </LinkContainer>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    )
  }
}
