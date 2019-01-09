import React, { Component } from 'react';
import './todo-list-item.css';
import classNames from 'classnames';

export default class ToDoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      }
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      }
    });
  }

  render() {
    const classes = classNames({
      'todo-list-item': true, 
      done: this.state.done, 
      important: this.state.important
    })
  
    return (
      <span className={classes}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {this.props.label}
        </span>
  
        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={this.props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
  
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
