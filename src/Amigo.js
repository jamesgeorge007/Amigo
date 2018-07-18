import React, { Component } from 'react';
import Tasks from './Tasks';

class Amigo extends Component {
  handleClick(){
    let index;
    let inputValue = this.state.inputValue;
    console.log(inputValue);
    this.setState({taskList : [...this.state.taskList, {index: this.state.taskList.length, inputValue}]}, () => {
      console.log(this.state);
      index +=1 ;
    });
  }
  changeValue(event){
    this.setState({inputValue: event.target.value}, () => {
  });
}
  constructor(props){
    super(props);
    this.state = {inputValue : '', taskList : []};
    this.handleClick = this.handleClick.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }
  render() {
    let tasks = this.state.taskList.map((task, key) => {
      return <Tasks key={key} task={task.inputValue} />
    });
    return (
      <div>
        <input type='text' ref='textfield' required placeholder='Enter your tasks' onChange={this.changeValue} />
        <button onClick={this.handleClick}>Add</button>
          {tasks}
      </div>
    );
  }
}

export default Amigo;
