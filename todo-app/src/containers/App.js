import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import CompletedItems from '../components/CompletedItems'
import ItemsToDo from '../components/ItemsToDo'
import AddTodo from '../components/AddTodo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.itemClick = this.itemClick.bind(this)
  }

  handleSubmit(e){
    const newTodoList = [...this.props.todoList, this.state.item]
    this.setState({item: ''})
    dispatch(submitTodo(newTodoList))
    e.preventDefault()
  }

  handleChange(e){
    this.setState({item: e.target.value})
  }

  itemClick (item, e){
    let completedArray = [...this.props.completedList, item]
    let todoArray = this.props.todoList.filter((_item) => _item !== item.toString())
    const actionItems = {todoList: todoArray, completedList: completedArray}
    dispatch(completeTodo(actionItems))
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
              todoList = {this.props.todoList} />
            <CompletedItems completedList = {this.props.completedList} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
