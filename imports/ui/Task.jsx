import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.PropTypes = {
  task: PropTypes.object.isRequired,
};