import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CompletedItems from '../components/CompletedItems'
import ItemsToDo from '../components/ItemsToDo'
import AddTodo from '../components/AddTodo'

import { submitTodo, completeTodo } from '../data/TodoRedux'

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
    e.preventDefault()
    const newTodoList = [...this.props.todoList, this.state.item]
    this.setState({item: ''})
    const { dispatch } = this.props
    submitTodo(newTodoList)
  }

  handleChange(e){
    this.setState({item: e.target.value})
  }

  itemClick (item, e){
    let completedArray = [...this.props.completedList, item]
    let todoArray = this.props.todoList.filter((_item) => _item !== item.toString())
    const actionItems = {todoList: todoArray, completedList: completedArray}
    const { dispatch } = this.props
    completeTodo(actionItems)
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

const mapStateToProps = state => ({
  todoList: state.todoList,
  completedList: state.completedList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  submitTodo,
  completeTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
