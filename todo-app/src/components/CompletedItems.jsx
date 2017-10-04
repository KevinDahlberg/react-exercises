import React, { Component } from 'react'

export default class CompletedItems extends Component {
  render() {
    return (
      <div>
        <h2>Completed Items</h2>
        <ul>
          {this.props.completedList.map((item, idx) =>
            <li key={idx}>{item}</li>
          )}
        </ul>
      </div>
    )
  }
}
