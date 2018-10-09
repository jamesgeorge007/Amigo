import React, { Component } from 'react';
import Tasks from './Tasks';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
});

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
        <Grid container spacing={8}>
          <Grid item xs={12} align="center">
            <Typography component="h2" variant="h3" gutterBottom>
              TODO App - React
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
              id="standard-textarea"
              label="Enter your tasks"
              placeholder="Placeholder"
              multiline
              required
              margin="normal"
              onChange={this.changeValue}
            />
            <Button variant="fab" mini color="secondary" aria-label="Add" onClick={this.handleClick}>
              +
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={8}>
            {tasks}
          </Grid>
        </Grid>                  
      </div>
    );
  }
}

export default Amigo;
