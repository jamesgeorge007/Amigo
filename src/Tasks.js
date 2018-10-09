import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Tasks extends Component {
  render(){
  return (
    <Card style={{margin: '10px 0'}}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {this.props.task}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ok</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    );
  }
}

export default Tasks;
