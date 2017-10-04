import React, { Component } from 'react'

export default class ItemsToDo extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (item, e){
    this.props.onItemClick(item, e)
  }
  
  todoItemList (array) {
    const itemArray = array.map((item, idx) => {
      let boundItemClick = this.handleItemClick.bind(this, item);
      return (
        <li key={idx} onClick={boundItemClick} value={item}>{item}</li>
      )
    })
    return itemArray
  }

  render() {
      return (
        <div>
          <h2>Items To Do</h2>
          <ul>
            {this.todoItemList(this.props.todoList)}
          </ul>
        </div>
      )
    }
}
