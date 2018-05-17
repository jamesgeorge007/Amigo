import React, { Component } from 'react';
import Tasks from './Tasks';

class Amigo extends Component {

  handleClick(){
    let inputValue = this.state.inputValue;
    console.log(inputValue);
    this.setState({taskList : this.state.taskList.push(inputValue), index: this.state.index+=1}, () => {
      console.log(this.state);
    });
  }
  changeValue(event){
    this.setState({inputValue: event.target.value}, () => {
  });
}
  constructor(props){
    super(props);
    this.state = {inputValue : '', taskList : [], index : 0};
    this.handleClick = this.handleClick.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }
  render() {
    return (
      <div>
        <input type='text' ref='textfield' required placeholder='Enter your tasks' onChange={this.changeValue} />
        <button onClick={this.handleClick}>Add</button>
          <Tasks />
      </div>
    );
  }
}

export default Amigo;
