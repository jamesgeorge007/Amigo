import React, { Component } from 'react';

class Tasks extends Component {
  render(){
  return (
      <div>
       <p> {this.props.task} </p>
    </div>
    );
  }
}

export default Tasks;
