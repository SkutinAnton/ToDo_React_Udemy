import React, { Component } from 'react';
import './todo-list-item.css';

export default class ToDoListItem extends Component {

  onLabelClick = () => {
    console.log(this.props.label);
  }

  render() {
    const { label, important } = this.props;

    const style = {
      color: important ? 'lightslategrey' : 'black',
    };
  
    return (
      <span className="todo-list-item">
        <span className="todo-list-item-label" style={style} onClick={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
  
        <button type="button" className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
