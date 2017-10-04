import React, { Component } from 'react';

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
    this.handleClick = this.handleClick.bind(this)
  }

  handleSubmit(e){
    const newTodoList = [...this.state.todoList, this.state.item]
    this.setState({item: '', todoList: newTodoList})
    e.preventDefault()
  }

  handleChange(e){
    this.setState({item: e.target.value})
  }

  handleClick(e){
    const item = e.target.value
    let completedArray = [...this.state.completedList, item]
    let todoArray = this.state.todoList.filter((_item) => _item !== item.toString())
    console.log(todoArray);
    this.setState({todoList: todoArray, completedList: completedArray})
  }

  render() {
    return (
      <div>
        <div>
          <h1>Awesome To Do List</h1>
          <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.item} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h2>Items To Do</h2>
          <ul>
            {this.state.todoList.map((item, idx) =>
              <li key={idx} onClick={this.handleClick} value={item}>{item}</li>
            )}
          </ul>
        </div>
        <div>
          <h2>Completed Items</h2>
          <ul>
            {this.state.completedList.map((item, idx) =>
              <li key={idx}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
