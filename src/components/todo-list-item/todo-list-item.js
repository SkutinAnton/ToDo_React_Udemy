import React, { Component } from 'react';
import './todo-list-item.css';
import classNames from 'classnames';

export default class ToDoListItem extends Component {

  render() {
    const classes = classNames({
      'todo-list-item': true, 
      done: this.props.done, 
      important: this.props.important
    })
  
    return (
      <span className={classes}>
        <span className="todo-list-item-label" onClick={this.props.onToggleDone}>
          {this.props.label}
        </span>
  
        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={this.props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
  
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.props.onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
