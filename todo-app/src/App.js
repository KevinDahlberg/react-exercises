import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import CompletedItems from './components/CompletedItems'
import ItemsToDo from './components/ItemsToDo'
import AddTodo from './components/AddTodo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: '',
      todoList: [],
      completedList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.itemClick = this.itemClick.bind(this)
  }

  handleSubmit(e){
    const newTodoList = [...this.state.todoList, this.state.item]
    this.setState({item: '', todoList: newTodoList})
    e.preventDefault()
  }

  handleChange(e){
    this.setState({item: e.target.value})
  }

  itemClick (item, e){
    let completedArray = [...this.state.completedList, item]
    let todoArray = this.state.todoList.filter((_item) => _item !== item.toString())
    this.setState({todoList: todoArray, completedList: completedArray})
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AddTodo
              onHandleSubmit = {this.handleSubmit}
              onHandleChange = {this.handleChange}
              item = {this.state.item} />
            <ItemsToDo
              onItemClick = {this.itemClick}
              todoList = {this.state.todoList} />
            <CompletedItems completedList = {this.state.completedList} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
