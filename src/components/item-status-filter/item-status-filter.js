import React, { Component }  from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  state = {
    status: 'all'
  }

  changeStatus = (status) => {
    this.props.onChangeStatus(status);
    this.setState({ status })
  }

  render() {
    const { status } = this.state;

    return (
      <div className="btn-group">
        <button
          type="button" 
          className={'btn ' + (status === 'all' ? 'btn-info' : 'btn-outline-secondary')} 
          onClick={() => this.changeStatus('all')}>All
        </button>

        <button 
          type="button" 
          className={'btn ' + (status === 'active' ? 'btn-info' : 'btn-outline-secondary')} 
          onClick={() => this.changeStatus('active')}>Active
        </button>

        <button 
          type="button" 
          className={'btn ' + (status === 'done' ? 'btn-info' : 'btn-outline-secondary')} 
          onClick={() => this.changeStatus('done')}>Done
        </button>
      </div>
    );
  }
}